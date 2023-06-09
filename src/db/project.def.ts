export interface Project {
    id: number;
    created_at: string;
    header_img: string;
    heading: string;
    sub_heading: string;
    overview: string;
    content?: string;
    post_content_path?: string;
    published: boolean;
    date: string;
    slug: string;
}
