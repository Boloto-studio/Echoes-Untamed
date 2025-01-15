### **Guide to Cloning and Setting Up the Project**

Welcome to the **Echoes Untamed**! This guide explains how to properly clone the repository and initialize submodules to ensure you have all the necessary files, including the large files hosted in a submodule.

---

### **Why Do We Use a Submodule?**

The `Echoes_Untamed_mods` submodule contains large mod files that are critical for the project but are too large to store directly in GitHub. By hosting these files in a separate repository on our self-hosted Gitea server, we:

- Avoid GitHub's file size and storage limits.
- Keep the main repository lightweight and easier to manage.
- Allow independent updates and sharing of large files without affecting the main project.

This setup ensures that we stay within hosting limits while providing you with all the necessary resources.

---

### **Repository URLs**

1. **Main GitHub Repository**:  
   [https://github.com/Collert/Echoes-Untamed.git](https://github.com/Collert/Echoes-Untamed.git)

2. **Submodule Hosted on Gitea (Large Files)**:  
   `http://23.16.73.26:3002/Collert/Echoes_Untamed_mods.git`

---

### **Steps to Clone the Repository**

#### **1. Install Git**

Ensure you have Git installed on your system:

- **Linux**:  

  ```bash
  sudo apt install git
  ```

- **macOS**:  

  ```bash
  brew install git
  ```

- **Windows**:  
  Download and install Git from [https://git-scm.com/](https://git-scm.com/).

#### **2. Clone the Main Repository**

Use the `--recurse-submodules` flag to clone the main repository and initialize the submodules in one step:

```bash
git clone --recurse-submodules https://github.com/Collert/Echoes-Untamed.git
```

#### **3. Verify the Submodule**

The submodule (`Echoes_Untamed_mods`) should automatically be initialized. To check, navigate into the project folder and ensure the submodule is properly cloned:

```bash
cd Echoes-Untamed
git submodule status
```

You should see something like this:

```
<commit-hash> Echoes_Untamed_mods (branch-name)
```

If the submodule is not cloned, run:

```bash
git submodule update --init --recursive
```

#### **4. Update the Submodule to the Latest Version**

If the submodule receives updates in the future, you can pull the latest changes with:

```bash
git submodule update --remote
```

#### **5. Collaborating and Pushing Changes**

When working on the project:

1. Commit changes to the main repository as usual:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. If you make changes to the submodule (e.g., `Echoes_Untamed_mods`):
   - Navigate into the submodule directory:

     ```bash
     cd Echoes_Untamed_mods
     ```

   - Commit and push changes:

     ```bash
     git add .
     git commit -m "Update submodule files"
     git push origin main
     ```

   - Update the submodule reference in the main repository:

    ```bash
     cd ..
     git add Echoes_Untamed_mods
     git commit -m "Update submodule reference"
     git push origin main
     ```

Or use VSCode's "Source control" GUI to simplify the process.

---

### **Troubleshooting**

#### **Submodule Clone Fails**

If cloning the submodule fails with a `403 Forbidden` or `Connection refused` error, ensure:

1. You are using the correct public IP for the submodule:  
   `http://23.16.73.26:3002/Collert/Echoes_Untamed_mods.git`
2. The server hosting the submodule (Gitea) is online and accessible from your network.

#### **Submodule Not Updating**

If the submodule doesn’t update, run:

```bash
git submodule sync
git submodule update --init --recursive
```

#### **Access Issues**

If you cannot access the Gitea-hosted submodule from your location, contact the project owner to check if the server is correctly configured or if the public IP has changed.

---

### **Key Notes**

1. **Git LFS**: Large files in the main repository are managed with Git LFS. Ensure you have Git LFS installed to pull those files:

   ```bash
   git lfs install
   ```

2. **Keep Submodules Updated**: The submodule might be updated independently, so always ensure you’re using the latest version by running:

   ```bash
   git submodule update --remote
   ```

If you are planning on contributing to the `mods` folder, register an account at `http://23.16.73.26:3002` and message me on Discord to add you to the  collaborator list for the mods repo.

Let me know if you encounter any issues! 😊
