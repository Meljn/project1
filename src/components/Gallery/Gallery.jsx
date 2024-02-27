import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery_info">
        <div className="gallery_info_header">Фотогалерея</div>
        <div className="gallery_info_text">
          Добавляйте фото в Instagram с хэштегом #куктур, а также отмечайте нас
          на фото. Лучшие фотографии украсят этот раздел нашего сайта.
        </div>
        <img src="/public/galley.png" alt="" className="galley" />
      </div>
    </div>
  );
}
