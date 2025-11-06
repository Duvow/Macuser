import { Machinery } from "./machinery";

export interface MachineryResponse {
    data: Machinery[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;

}
