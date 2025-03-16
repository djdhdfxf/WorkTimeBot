def save_photo(file):  
    import time  
    filename = f"photo_{int(time.time())}.jpg"  
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)  
    file.save(file_path)  
    return file_path
    
if photo_path:  
    send_photo_to_telegrambot(chat_id, photo_path)  
