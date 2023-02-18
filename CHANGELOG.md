# Release Notes

**v1.9.0:**
- added integration with [official Databricks extensions](https://marketplace.visualstudio.com/items?itemName=databricks.databricks)
  - new connection manager [Databricks Extensions](README.md/#setup-and-configuration-databricks-extension-connection-manager)
  - derive cluster for [SQL Browser](README.md/#sql-browser)
  - change cluster using [Cluster Manager](README.md/#cluster-manager)

**v1.5.0:**
- added support for [Widgets](README.md/#widgets) when running Notebooks

**v1.4.1:**
- fixed issue where the creation of `_sqldf` was also done for non-select statements resulting in duplicate exeuction of e.g. `INSERT` statements
- performance improvement when switching between Azure Databricks Connections

**v1.4.0:**
- fixed an issue with the `Create cluster` link
- rework [Azure Connection Manager](README.md/#setup-and-configuration-azure-connection-manager) so it automatically uses existing crednetials without prompt
- added `Open Explorer` action to locally synced workspace items in [Workspace Manager](README.md/#workspace-manager)

**v1.3.1:**
- changed [Azure Connection Manager](README.md/#setup-and-configuration-azure-connection-manager) to use VSCode authentication instead of Azure Account Extension
- fixed issue with downloading workspace folders

**v1.3.0:**
- added new Connection Manager to load Databricks workspaces directly from your Azure Account
- added support for [`_sqldf` in Python/PySpark](https://docs.databricks.com/notebooks/notebooks-use.html#implicit-sql-df)
- reworked API connection test

**v1.2.5:**
- fixed parsing of `apiRootUrl` when reading from the config (only taking schema+authority now)

**v1.2.4:**
- added `Pin` and `Unpin` to [Cluster Manager](README.md/#cluster-manager)
- minor fixes [Cluster Manager](README.md/#cluster-manager)
- improved input via textboxes

**v1.2.3:**
- Databricks Kernels are now moved to the top when opening a notebook from the local sync folder or via `dbws:/`
- added `Insert` buttons for Secrets to easily add the code snippet to the current editor/notebook
- fixed an issue with `%run`

**v1.2.2:**
- added `Restart Kernel` to Databricks notebooks
- added details specs of cluster to Notebook Kernel selector
- fixed an issue where the extension did not load when no default connection was specified
- fixed an issue with `%run` and absolute paths ([#93](/../../issues/93))
- fixed an issue with `Files in Repos` ([#101](/../../issues/101))
- fixed an issues with CLI Connection Manager ([#99](/../../issues/99))
- fixed an issue when up-/downloading whole folders recursively in [Workspace Manager](README.md/#workspace-manager)
- prepare to make extension work in the web
  - reworked API connection to use generic [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of Axios library
  - added build config for web-extension
  - removed all external dependencies

**v1.1.4:**
- added support for `dbutils.notebook.run` in Live-mode (via mounting `dbws:/...` in VSCode workspace)
- fixed some issues with legacy DBFS and Workspace browser
- fixed an issue with workspace browser file compare
- fixed an issue when opening a job in the browser
- fixed issue where Repo Manager did not use pagination of the API and hence did not show more than 20 entries

**v1.1.3:**
- added support for `%run` in notebooks
- added auto-refresh for new notebook kernels

**v1.1.2:**
- make [File System Integration](README.md/#file-system-integration) work without non-notebook files (e.g. Files in Repos)

**v1.1.1:**
- make [File System Integration](README.md/#file-system-integration) work without having to open the Databricks tab first
- fixed issues with [File System Integration](README.md/#file-system-integration)
  - folders with a single sub-folder only now work
  - fixed an issue where Repos did not work/could not be browsed properly
- switch focus to VSCode Explorer when adding DBFS/Workspace to the VSCode workspace
- added `Pull` Button to the [Repo Manager](README.md/#repo-manager) to pull the latest changes from Git
- added proper HTML output for notebooks/executions that returned HTML as plain text
- fixed issue with [Workspace Manager](README.md/#workspace-manager) where files could not be downloaded properly anymore

**v1.1.0:**
- added File System APIs for `dbfs:/` (same as in Databricks) and also `dbws:/` for the workspace/notebooks
- added support for [Files in Repos](https://docs.databricks.com/repos/work-with-notebooks-other-files.html)
- fixed issue with `Execute All Cells` in notebook kernel
- fixed issue with multiple notebooks connected to the same kernel
- added packaging of the source code with webpack for improved loading times

**v1.0.0:**
- added support for [Notebook Kernel](README.md/#notebook-kernel) to allow execution of code on the Databricks cluster from within VSCode notebooks
- major improvements for useability and user-interaction
- performance improvements when refreshing tree-views
- improved logging and output of messages
- use native VSCode icons instead of custom ones