/**
 * Helper function to get a formatted time (HH:MM) from a Date object in 24-hour format.
 * @param {Date} dateObj
 * @returns {string} Formatted time as "HH:MM"
 */
function formatHourMinutes(dateObj: Date) {
  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

/**
 * Returns the score (goals) for a given participant by selecting the score object with the least id.
 * If no score is found for that participant, returns 0.
 *
 * @param {number} participantId - The id of the team/participant.
 * @param {Array} scores - The array of score objects from the fixture.
 * @returns {number} The goals value from the score object with the smallest id.
 */
function getLeastScoreForParticipant(participantId: any, scores: any) {
  if (!scores || !scores.length) return 0;
  // Filter scores that match the participantId
  const participantScores = scores.filter(
    (scoreObj: any) => scoreObj.participant_id === participantId
  );
  if (!participantScores.length) return 0;
  // Sort by id (ascending) and pick the first one
  participantScores.sort((a: any, b: any) => a.id - b.id);
  return participantScores[0]?.score?.goals ?? 0;
}

/**
 * Groups and maps fixtures into the required output structure.
 *
 * The output is an array of objects grouped by league and stage. Each group has:
 *  - leageName: League name.
 *  - leageLOgo: League logo URL.
 *  - satge: Stage name.
 *  - data: An array of fixture objects each with:
 *       - teamA: Name of the first team.
 *       - teamB: Name of the second team.
 *       - scoreA: The least score for teamA (by score id).
 *       - scoreB: The least score for teamB (by score id).
 *       - logoA: The logo URL for teamA.
 *       - logoB: The logo URL for teamB.
 *       - isLive: Boolean indicating if the match is live (based on starting time and match length).
 *       - time: A formatted string like "2025-03-30 16:00:00 end of the 16:00"
 *
 * @param {Array} fixtures - Array of fixture objects.
 * @returns {Array} Grouped fixture data.
 */
export function mapAndGroupFixtures(fixtures: any) {
  const groups: any = {};
  const now = new Date();

  fixtures?.forEach((fixture: any) => {
    // Get league and stage details
    const leagueName = fixture.league?.name || "Unknown League";
    const leagueLogo = fixture.league?.image_path || "";
    const stageName = fixture.stage?.name || "Unknown Stage";

    // Create a group key using league name and stage name
    const groupKey = `${leagueName}-${stageName}`;

    // Initialize group if not exists
    if (!groups[groupKey]) {
      groups[groupKey] = {
        leagueName: leagueName,
        leagueLogo: leagueLogo,
        stage: stageName,
        data: [],
      };
    }

    // Assume fixture.participants is an array with two teams
    const [teamA, teamB] = fixture.participants || [];

    // For each team, get the least score based on score id.
    const scoreA = teamA
      ? getLeastScoreForParticipant(teamA.id, fixture.scores)
      : 0;
    const scoreB = teamB
      ? getLeastScoreForParticipant(teamB.id, fixture.scores)
      : 0;

    // Calculate live status based on starting time and match duration.
    const startTime = new Date(fixture.starting_at);
    const matchDurationMs = fixture.length * 60000; // converting minutes to milliseconds
    const endTime = new Date(startTime.getTime() + matchDurationMs);
    const isLive = now >= startTime && now < endTime;

    // Create the "time" field using the fixture's starting_at and the formatted hour:minute portion.
    const formattedTime = formatHourMinutes(startTime);

    // Build the mapped fixture object
    const mappedFixture = {
      teamA: teamA?.name || "Unknown",
      teamB: teamB?.name || "Unknown",
      scoreA,
      scoreB,
      logoA: teamA?.image_path || "",
      logoB: teamB?.image_path || "",
      isLive,
      time: formattedTime,
    };

    // Add mapped fixture to the corresponding group.
    groups[groupKey].data.push(mappedFixture);
  });

  // Return grouped data as an array.
  return Object.values(groups) || [];
}
