import { Activity } from "./activity/activity";

export interface User {
    id: string;
    name: string;
    nick?: string;
    imageUrl?: string;
    activities?: Activity[];
}