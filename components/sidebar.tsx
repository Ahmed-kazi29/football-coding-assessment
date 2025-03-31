"use client";

import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  MapPin,
  MessageCircle,
  Bell,
  Settings,
  Download,
  Sun,
  Moon,
  Menu,
  ChevronRight,
  Search,
  Shield,
  User,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ui/ThemeToggle";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const SidebarContent = () => (
    <div className="flex h-full flex-col gap-4 bg-custom-gray-1">
      <div className="flex items-center justify-center px-4 py-3">
        <span className="font-bold">
          FOOTBALL<span className="text-custom-green">SHURU</span>
        </span>
      </div>

      <div className="px-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-8 bg-custom-gray-2 border-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <nav className="grid gap-1 px-2">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-custom-green hover:text-custom-green dark:text-gray-400 dark:hover:text-gray-50"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            href="/leaderboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-custom-green dark:text-gray-400 dark:hover:text-gray-50"
          >
            <Users className="h-4 w-4" />
            Leader Board
          </Link>
          <Link
            href="/ground"
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-custom-green dark:text-gray-400 dark:hover:text-gray-50"
          >
            <MapPin className="h-4 w-4" />
            Ground
          </Link>
          <Link
            href="/chat"
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-custom-green dark:text-gray-400 dark:hover:text-gray-50"
          >
            <MessageCircle className="h-4 w-4" />
            Chat
          </Link>
          <Link
            href="/notifications"
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-custom-green dark:text-gray-400 dark:hover:text-gray-50"
          >
            <Bell className="h-4 w-4" />
            Notification
          </Link>

          <div className="my-2 h-px bg-gray-200 dark:bg-gray-800" />

          <Button
            variant="ghost"
            className="flex w-full justify-between hover:text-custom-green hover:bg-transparent"
          >
            <div className="flex items-center gap-3">
              <Shield className="h-4 w-4" />
              <span>Followed Team</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className="flex w-full justify-between hover:text-custom-green hover:bg-transparent"
          >
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4" />
              <span>Followed Players</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className="flex w-full justify-between hover:text-custom-green hover:bg-transparent"
          >
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              <span>Followed Ground</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="my-2 h-px bg-gray-200 dark:bg-gray-800" />

          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-custom-green dark:text-gray-400 dark:hover:text-gray-50"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>

          <Link
            href="/download"
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-custom-green dark:text-gray-400 dark:hover:text-gray-50"
          >
            <Download className="h-4 w-4" />
            Download The App
          </Link>
        </nav>
      </div>

      <div className="mt-auto p-4">
        <ThemeToggle />

        <div className="mt-4 flex items-center gap-2 justify-between">
          <div className="px-2 py-1 rounded-lg bg-custom-gray-2 flex-grow flex items-center gap-2">
            <User className="w-9 p-1 aspect-square bg-custom-green rounded-lg" />
            <div className="flex flex-col">
              <p className="text-sm font-bold text-custom-green">Varun_kubal</p>
              <p className="text-xs font-bold">varun_kubal@gmail.com</p>
            </div>
          </div>
          <div className="w-14 aspect-square flex justify-center items-center rounded-lg bg-custom-gray-2">
            <LogOut className="min-w-[35px] aspect-square text-custom-green bg-custom-gray-2 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 border-r bg-background",
          className
        )}
      >
        <SidebarContent />
      </div>
    );
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}
