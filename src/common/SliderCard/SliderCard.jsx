import s from './SliderCard.module.css';

export default function SliderCard({ className, children, item }) {
  return (
    <div className={`${s.containerCard} ${className}`}>
      <picture className={s.cardImgPicture}>
        <source
          media="(min-width: 1200px)"
          srcSet={`${item.img_desktop_1x} 1x, ${item.img_desktop_2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${item.img_tablet_1x} 1x, ${item.img_tablet_2x} 2x`}
        />
        <source
          media="(max-width: 480px), (max-width: 480px)"
          srcSet={`${item.img_mob_1x} 1x, ${item.img_mob_2x} 2x`}
        />
        <img
          src={item.img_mob_1x}
          alt={item.imgAlt}
          className={s.cardImg}
          // width="130" height="174"
        />
      </picture>
      <div className={s.cardBox}>
        <h3 className={s.cardTitle}>{item.title}</h3>
        <p className={s.cardText}>{item.text}</p>
        <p className={s.cardSubText}>{item.subText}</p>
        {children}
      </div>
    </div>
  );
}
