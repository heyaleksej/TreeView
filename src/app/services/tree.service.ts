import { Injectable, signal } from '@angular/core';
import { TreeNode } from "../model/tree.model";

@Injectable({ providedIn: 'root' })
export class TreeStateService {
    expandedNodes = signal<Set<number>>(new Set());

    toggleNode(id: number) {
        const updated = new Set(this.expandedNodes());
        updated.has(id) ? updated.delete(id) : updated.add(id);
        this.expandedNodes.set(updated);
    }

    isExpanded(id: number): boolean {
        return this.expandedNodes().has(id);
    }

    expandAll(node: TreeNode) {
        const updated = new Set(this.expandedNodes());
        this.addAllChildrenToSet(node, updated)
        this.expandedNodes.set(updated);
    }

    private addAllChildrenToSet(node: TreeNode, set: Set<number>) {
        set.add(node.id);
        this.toggleNode(node.id)
        if (node.children && node.children.length) {
            node.children.forEach(child => this.addAllChildrenToSet(child, set));
        }
    }
}