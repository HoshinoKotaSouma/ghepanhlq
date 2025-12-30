import os
import json

def generate_js_database():
    # Thư mục chứa ảnh
    base_dir = "uploads"
    skin_database = {}

    if not os.path.exists(base_dir):
        print(f"❌ Lỗi: Không tìm thấy thư mục '{base_dir}'")
        return

    # Duyệt qua các thư mục con trong uploads/
    folders = sorted([f for f in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, f))])

    for folder in folders:
        folder_path = os.path.join(base_dir, folder)
        # Lấy danh sách ảnh trong thư mục đó
        images = sorted([img for img in os.listdir(folder_path) if img.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))])
        
        if images:
            # Tên hiển thị (Viết hoa chữ cái đầu cho đẹp, ví dụ: tel -> Tel)
            display_name = folder.capitalize() 
            skin_database[display_name] = images

    # Tạo chuỗi nội dung JavaScript
    js_content = "const skinDatabase = " + json.dumps(skin_database, indent=4, ensure_ascii=False) + ";"
    
    # Ghi ra file hoặc in ra màn hình
    with open("database_output.txt", "w", encoding="utf-8") as f:
        f.write(js_content)
    
    print("✅ Đã tạo xong! Hãy mở file 'database_output.txt' để lấy mã nguồn.")

if __name__ == "__main__":
    generate_js_database()