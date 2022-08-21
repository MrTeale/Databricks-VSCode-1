import * as vscode from 'vscode';
import * as fspath from 'path';
import { WorkspaceItemType, WorkspaceItemLanguage } from './_types';
import { iDatabricksWorkspaceItem } from './iDatabricksworkspaceItem';
import { ThisExtension } from '../../../ThisExtension';

export class DatabricksWorkspaceTreeItem extends vscode.TreeItem implements iDatabricksWorkspaceItem {
	protected _path: string;
	protected _object_type: WorkspaceItemType;
	protected _object_id: number;
	protected _parent: DatabricksWorkspaceTreeItem;

	constructor(
		path: string,
		object_type: WorkspaceItemType,
		object_id: number,
		parent: DatabricksWorkspaceTreeItem,
		collapsibleState: vscode.TreeItemCollapsibleState = vscode.TreeItemCollapsibleState.Collapsed
	) {
		super(path, collapsibleState);

		this._path = path;
		this._object_type = object_type;
		this._object_id = object_id;
		this._parent = parent;

		this.init();
	}

	init(): void {
		super.label = this.path.split('/').pop();

		super.iconPath = {
			light: this.getIconPath("light"),
			dark: this.getIconPath("dark")
		};
	}

	protected getIconPath(theme: string): vscode.Uri {
		return vscode.Uri.joinPath(ThisExtension.rootUri, 'resources', theme, 'workspace', this.object_type.toLowerCase() + '.png');
	}	

	command = null;
	/*
	readonly command = {
		command: 'databricksWorkspaceItem.click', title: "Open File", arguments: [this]
	};
	*/

	public async getChildren(): Promise<DatabricksWorkspaceTreeItem[]> {
		await vscode.window.showErrorMessage("getChildren is not implemented! Please overwrite in derived class!");
		return undefined;
	}

	/* iDatabrickWorkspaceItem implementatin */
	public get path(): string {
		return this._path;
	}

	get object_type(): WorkspaceItemType {
		if (!this._object_type) {
			return 'DIRECTORY';
		}
		return this._object_type;
	}

	public get object_id(): number {
		return this._object_id;
	}

	public get parent(): DatabricksWorkspaceTreeItem | undefined {
		return this._parent;
	}

	public static fromInterface(item: iDatabricksWorkspaceItem, parent: DatabricksWorkspaceTreeItem = null): DatabricksWorkspaceTreeItem {
		return new DatabricksWorkspaceTreeItem(item.path, item.object_type, item.object_id, parent);
	}

	public static fromJSON(itemDefinition: string, parent: DatabricksWorkspaceTreeItem = null): DatabricksWorkspaceTreeItem {
		let item: iDatabricksWorkspaceItem = JSON.parse(itemDefinition);
		return DatabricksWorkspaceTreeItem.fromInterface(item, parent);
	}

	public CopyPathToClipboard(): void {
		vscode.env.clipboard.writeText(this.path);
	}

	async refreshParent(): Promise<void> {
		vscode.commands.executeCommand("databricksWorkspace.refresh", false, this.parent);
	}
}