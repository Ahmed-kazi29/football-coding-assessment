export interface MatchData {
  id: number;
  sport_id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  group_id: number | null;
  aggregate_id: number | null;
  round_id: number;
  state_id: number;
  venue_id: number;
  name: string;
  starting_at: string; // ISO date string
  result_info: string | null;
  leg: string;
  details: string | null;
  length: number;
  placeholder: boolean;
  has_odds: boolean;
  has_premium_odds: boolean;
  starting_at_timestamp: number;
}

export interface LeagueMatchData {
  leagueName: string;
  leagueLogo: string;
  stage: string;
  data: MatchDetails[];
}

export interface MatchDetails {
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  logoA: string;
  logoB: string;
  isLive: boolean;
  time: string;
}
