import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgTemplateOutlet } from "@angular/common";
import { TreeNode } from "../../model/tree.model";
import { TreeStateService } from "../../services/tree.service";

@Component({
  selector: 'app-tree-view',
  imports: [
    NgTemplateOutlet,
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeViewComponent {
  @Input({ required: true }) nodes!: TreeNode[];
  @Input({ required: true }) nodeTemplate!: any;
  protected readonly treeService = inject(TreeStateService);

  getContext(node: TreeNode) {
    return {
      $implicit: node,
      expandAll: () => this.treeService.expandAll(node),
      isExpanded: this.treeService.isExpanded(node.id)
    };
  }
}