export interface TreeNode {
    id: number;
    title: string;
    is_deleted: boolean;
    deleted_at?: Date | null,
    children: TreeNode[];
}