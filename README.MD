# Echoes untamed

[Go to Ukrainian Version](#ukrainian-version)

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

## Ukrainian Version

### **Гайд зі завантаження та налаштування проєкту**

Вітаємо в проєкті **Echoes-Untamed**! Цей гайд пояснює, як правильно завантажити репозиторій і ініціалізувати субмодулі, щоб отримати всі необхідні файли, включаючи великі файли, які зберігаються у субмодулі.

---

### **Чому ми використовуємо субмодуль?**

Субмодуль `Echoes_Untamed_mods` містить великі файли з модами, які є критично важливими для проєкту, але надто великі, щоб зберігати їх безпосередньо на GitHub. Завдяки зберіганню цих файлів у окремому репозиторії на нашому локальному сервері Gitea, ми:

- Уникаємо обмежень розміру файлів і сховища на GitHub.
- Зберігаємо основний репозиторій легким і простим для управління.
- Дозволяємо незалежно оновлювати і ділитися великими файлами без впливу на основний проєкт.

Ця структура дозволяє залишатися в межах обмежень хостингу, водночас надаючи вам усі необхідні ресурси.

---

### **URL-адреси репозиторіїв**

1. **Основний репозиторій GitHub**:  
   [https://github.com/Collert/Echoes-Untamed.git](https://github.com/Collert/Echoes-Untamed.git)

2. **Субмодуль, розміщений на Gitea (великі файли)**:  
   `http://23.16.73.26:3002/Collert/Echoes_Untamed_mods.git`

---

### **Кроки для завантаження репозиторію**

#### **1. Встановіть Git**

Переконайтеся, що Git встановлено на вашій системі:

- **Linux**:  

  ```bash
  sudo apt install git
  ```

- **macOS**:  

  ```bash
  brew install git
  ```

- **Windows**:  
  Завантажте та встановіть Git з [https://git-scm.com/](https://git-scm.com/).

#### **2. Клонуйте основний репозиторій**

Використовуйте параметр `--recurse-submodules`, щоб клонувати основний репозиторій і ініціалізувати субмодулі одним кроком:

```bash
git clone --recurse-submodules https://github.com/Collert/Echoes-Untamed.git
```

#### **3. Перевірте субмодуль**

Субмодуль (`Echoes_Untamed_mods`) повинен автоматично ініціалізуватися. Щоб переконатися, перейдіть до папки проєкту і перевірте статус субмодуля:

```bash
cd Echoes-Untamed
git submodule status
```

Ви повинні побачити щось подібне:

```bash
<commit-hash> Echoes_Untamed_mods (branch-name)
```

Якщо субмодуль не клоновано, виконайте:

```bash
git submodule update --init --recursive
```

#### **4. Оновіть субмодуль до останньої версії**

Якщо субмодуль оновлюється в майбутньому, ви можете завантажити останні зміни за допомогою:

```bash
git submodule update --remote
```

#### **5. Спільна робота та відправлення змін**

Працюючи над проєктом:

1. Вносьте зміни в основний репозиторій як зазвичай:

   ```bash
   git add .
   git commit -m "Ваш коментар до коміту"
   git push origin main
   ```

2. Якщо ви вносите зміни до субмодуля (наприклад, `Echoes_Untamed_mods`):
   - Перейдіть до директорії субмодуля:

     ```bash
     cd Echoes_Untamed_mods
     ```

   - Закомітьте і відправте зміни:

     ```bash
     git add .
     git commit -m "Оновлення файлів у субмодулі"
     git push origin main
     ```

   - Оновіть посилання на субмодуль в основному репозиторії:

     ```bash
     cd ..
     git add Echoes_Untamed_mods
     git commit -m "Оновлення посилання на субмодуль"
     git push origin main
     ```

---

### **Усунення несправностей**

#### **Субмодуль не завантажується**

Якщо завантаження субмодуля завершується помилкою `403 Forbidden` або `Connection refused`, переконайтеся, що:

1. Ви використовуєте правильну публічну IP-адресу для субмодуля:  
   `http://23.16.73.26:3002/Collert/Echoes_Untamed_mods.git`
2. Сервер, який хостить субмодуль (Gitea), працює та доступний з вашої мережі.

#### **Субмодуль не оновлюється**

Якщо субмодуль не оновлюється, виконайте:

```bash
git submodule sync
git submodule update --init --recursive
```

#### **Проблеми з доступом**

Якщо ви не можете отримати доступ до субмодуля, зверніться до власника проєкту, щоб перевірити конфігурацію сервера або публічну IP-адресу.

---

### **Основні примітки**

1. **Git LFS**: Великі файли в основному репозиторії керуються за допомогою Git LFS. Переконайтеся, що у вас встановлено Git LFS, щоб завантажити ці файли:

   ```bash
   git lfs install
   ```

2. **Оновлюйте субмодулі**: Субмодуль може оновлюватися незалежно, тому завжди переконайтеся, що ви використовуєте його останню версію, виконуючи:

   ```bash
   git submodule update --remote
   ```

Якщо ви плануєте вносити зміни до папки модів, зареєструйтеся на `http://23.16.73.26:3002` і надішліть мені повідомлення на Discord, щоб я додав вас до списку співавторів репи з модами.

Якщо у вас виникли запитання чи проблеми, звертайтеся! Успішної роботи! 😊
