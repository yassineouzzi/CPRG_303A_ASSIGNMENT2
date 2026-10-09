import { IconName } from "@/types/haul";

export type MenuItem = {
  id: string;
  label: string;
  icon: IconName;
  href?: "/same-day" | "/haul";
};