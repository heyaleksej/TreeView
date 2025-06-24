import { Component } from '@angular/core';
import { TreeViewComponent } from "./components/tree-view/tree-view.component";
import { NgClass, NgIf } from "@angular/common";
import { TreeNode } from "./model/tree.model";
import { treeNodes } from "./data/mock-data";

@Component({
  selector: 'app-root',
  imports: [TreeViewComponent, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly treeNodes = treeNodes;

  getRootTreeByIndex(treeNodes: TreeNode[], index: number): TreeNode[] {
    return [treeNodes[index]];
  }

  informInConsole(node: any) {
    console.log('нажали на узел ID ' + node.id)
  }

}
