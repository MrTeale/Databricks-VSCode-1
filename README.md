# Databricks.VSCode
This is a Visual Studio Code extension that allows you to work with Azure Databricks and Databricks on AWS in an efficient way having everything you need integrated into VS Code. This includes:

- Workspace browser
	- Up-/download of notebooks
	- Execution of notebooks against Databricks Cluster 
	(requires Databricks-Connect)
- Cluster manager 
	- Start/stop clusters
	- Script cluster definition as JSON
- DBFS browser
- Secrets browser
	- Create/delete secret scopes
	- Create/delete secrets
- Support for multiple Databricks workspaces
- Easy confiugration via standrd VS Code settings

# Installation
The extension can be downloaded directly from within VS Code. Simply go to the Extensions tab and search for "Databricks" and select and install the extension "databricks.vscode".

Alternatively it can also be downloaded from the VS Code marketplace.

# Setup and Configuration
The configuration happens directly via VS Code. Simply open the settings via File -> Preferences -> Settings or by using the keyboard shortcut ```CTRL + ,```
Then either search for "Databricks" or expand Extensions -> Databricks.
The settings themselves are very well described and it should be easy for you to populate them. Also, not all of them are mandatory! Some of the optional settings allow better integration with Databricks-Connect but this is still work in progress.
To configure multiple Databricks environments/workspaces, you need to use the JSON editor. 

``` json
		...
		"databricks.connections": [
			{
				"apiRootUrl": "https://westeurope.azuredatabricks.net",
				"cloudProvider": "Azure",
				"displayName": "My Dev workspace",
				"localSyncFolder": "c:\\Databricks\\dev",
				"personalAccessToken": "dapi219e30212312311c6721a66ce879e"
			},
			{
				"apiRootUrl": "https://westeurope.azuredatabricks.net",
				"cloudProvider": "Azure",
				"displayName": "My Test workspace",
				"localSyncFolder": "c:\\Databricks\\test",
				"personalAccessToken": "dapi219e30212312311c672aaaaaaaaaa"
			}
		],
		...
```

All these settings can either be configured on a global/user or on a workspace level. The recommendation is to use workspace configurations and then to include the localSyncFolders into your workspace for easy access to your notebooks and sync to GIT. 
Using a workspace configuration also allows you separate differnt Databricks environments completely. 

# Environments
-- ADD IMAGE HERE --
You can either work with a single environment or configure multiple environments. If you use multiple environments, you will see your list in the Environments view and icons indicating which one is currently active. To change the environment, simply click the "Activate" button next to an inactive environment. All other views will update automatically.

# Workspace Browser
-- ADD IMAGE HERE --
The workspace Browser connects directly to the Databricks workspace and loads the whole folder strucuture recursively. It displays folders, notebooks and libraries. Notebooks and folders and be up- and downloaded manually by simply clicking the corresponding item next them. If you do an up-/download on a whole folder or on the root, it will up-/download all items recursively.
The files are stored in the **localSyncFolder** that you configured in your settings. If you click or doubleclick a file, it will be downloaded locally and opened as IPython notebook or respectively as native .r, .scala or .sql file.
IPython notebooks can then be executed directly against the Databricks cluster again if Databricks-Connect is setup correctly ([Setup Databricks-Connect on AWS](https://docs.databricks.com/dev-tools/databricks-connect.html), [Setup Databricks-Connect on Azure](https://docs.microsoft.com/en-us/azure/databricks/dev-tools/databricks-connect))

# Cluster Manager
-- ADD IMAGE HERE --
This VS Code extension also allows you to manage your Databricks clusters directly from within VS Code. So you do not need to open the web UI anymore to start or stop your clusters.
In addition, it also allows you to script the definition of your cluster and store it locally - e.g. if you want to integrate it as part of your CI/CD. This cluster definition file can for example be used with the [DatabricksPS PowerShell Module](https://www.powershellgallery.com/packages/DatabricksPS) to automate the cluster deployment.

# DBFS Browser
-- ADD IMAGE HERE --
The DBFS Browser allows you to browse the whole Databricks File System including mountpoints!
Up-/Download of files will also come soon!

# Secrets Browser
-- ADD IMAGE HERE --
Another tool to help you working with Databricks locally is the Secrets Browser. It allows you to browse, create, update and delete your secret scopes and secrets.