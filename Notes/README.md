# git心得筆記

## 1. 本地端

__1. `git init` : 在想要被追蹤的目錄使用，並會建立.git的資料夾，其中包含必需的倉儲檔案和指令。__

* 方便性在於，不需要再安插其他外掛套件。

__2. `git add [檔名.副檔名] (or) git add -A` : 將檔案加入追蹤並預存，或者將所有檔案加入追蹤並預存。__

* 其兩種用法，一個較為嚴僅，一個較為鬆散但方便。

__3. `git commit -m "[輸入狀態資料]"` : 提交預存的追蹤檔案__

__4. `git clone https://***` : 取得遠端git倉庫的複本，但並不代表可以隨意修改並推回。__

__5. `git status` : 可以觀看檔案處於什麼狀態下的主要工具，也可以觀看有哪些檔案沒被加入追蹤。__

* 因為會有分支版本，所以這個指令很重要。

__6. `git status -s` : -s為簡易版本，-s最前方的狀態欄位有2欄，第1欄為預存區第2欄為工作目錄，若M在第1欄的話表示修改過後也預存了，M在第2欄則被修改過但未預存。__

    ?? : 為未追蹤的新檔案
    A : 為被加入預存的新檔案
    M : 則是已被修改的檔案

__7. `git rm` : 移除檔案，加入`-f`可以強制移除。__

__8. `git log` : 時間順序列出提交歷史紀錄，最新版本會被列為最上面，commit(校驗碼)、Author(作者名字和電子郵件)、Date(寫入日期)，也可以觀察到HEAD指向的分支。__

    commit(校驗碼)
    Author(作者名字和電子郵件)
    Date(寫入日期)
    -------------------------
    若想要退出git log環境按Q鍵就好。

__9. `git log -p -2` : 顯示最新的兩筆資料，並檢視被修改的內容。__

__10. 若想要放棄修改過但還沒有git add 的檔案，可以使用以下指令。__

    git checkout -- [檔案名稱]

---

## 2. 遠端

__1. `git remote` : 顯示你git clone的遠端版本的倉庫。__

__2. `git remote -v` : 則是可以顯示叫簡潔的版本。__

__3. `git remote add [簡稱] [URL]` : 新增遠端版本倉庫，簡稱取名建議用upstream， 因為這樣就會知道還有一個上游的遠端。__

__4. `git fetch [遠端倉庫名稱](upstream)` : 從遠倉庫把upstream的版本抓取下來，但前提是要先創建upstream的遠端版本倉庫。__

__5. `git push [遠端倉庫名稱] [分支名稱]` : 把修該好的專案推回遠端版本倉庫。__

__6. `git remote rename [原遠端倉庫名] [欲更改的名稱]` :　更改遠端版本倉庫名稱。__

__7. `git remote rm [遠端版本倉庫]` : 移除遠端版本倉庫。__

---

## 3. 分支工作

* __HEAD的觀念 : HEAD會指向目前的分支，而目前的分支都會指向先前較舊的前一個分支，以校驗碼的前五碼作為判別。__

__1. `git branch [欲建立的分支]` : 可以將目前master版本，分岔出多個分支版本。__

    如 git branch TestA
    
__2. `git log --oneline --decorate` : 使用此指令更易於觀察分支情況。__

__3. `git checkout [分支名稱]` : 再分支之間切換。__

__4. `git checkout -b [分支名稱]` : 想當於建立一個分支並切換到該分支底下，可以想像成將這兩條指令合起來 git branch 、 git checkout。__

__5. `git checkout -d [分支名稱]` : 可以刪除分支。__