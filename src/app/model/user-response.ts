import { User } from "./user";

export interface UserResponse {
    data: User[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}
