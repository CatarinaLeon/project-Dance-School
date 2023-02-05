import s from './ItemsList.module.css';

export default function ItemsList({ children, className, item }) {
  return (
    <>
      <li className={`${s.listItem} ${className}`}>
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`${item.img_desktop_1x} 1x, ${item.img_desktop_2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${item.img_tablet_1x} 1x, ${item.img_tablet_2x} 2x`}
          />
          <source
            media="(max-width: 480px), (min-width: 480px)"
            srcSet={`${item.img_mob_1x} 1x, ${item.img_mob_2x} 2x`}
          />
          <img src={item.img_mob_1x} alt={item.alt} />
        </picture>
        <div>{children}</div>
      </li>
    </>
  );
}
