import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";
import image8 from "./assets/image8.png";
import image9 from "./assets/image9.png";
import image10 from "./assets/image10.png";
import image11 from "./assets/image11.png";
import image12 from "./assets/image12.png";
import image13 from "./assets/image13.png";
import image14 from "./assets/image14.png";
import image15 from "./assets/image15.png";
import image16 from "./assets/image16.png";
import image17 from "./assets/image17.png";
import image18 from "./assets/image18.png";
import image19 from "./assets/image19.png";
import image20 from "./assets/image20.png";
import image21 from "./assets/image21.png";
import image22 from "./assets/image22.png";
import image23 from "./assets/image23.png";
import image24 from "./assets/image24.png";
import image25 from "./assets/ContentViewA.png";
import image26 from "./assets/ContentGroup.png";
import image27 from "./assets/ContentViewA-1.png";
import image28 from "./assets/ContentGroup-1.png";
import image29 from "./assets/ContentViewA-2.png";
import image30 from "./assets/ContentViewA-3.png";
import image31 from "./assets/ContentViewA-4.png";
import image32 from "./assets/ContentViewA-5.png";
import image33 from "./assets/ContentViewA-6.png";
import image34 from "./assets/ContentViewA-7.png";
import image35 from "./assets/ContentViewA-8.png";
import image36 from "./assets/ContentViewA-9.png";
import image37 from "./assets/ContentViewA-10.png";
import image38 from "./assets/ContentViewA-11.png";
import image39 from "./assets/ContentViewA-12.png";
import image40 from "./assets/ContentViewA-13.png";
import image41 from "./assets/ContentViewA-14.png";
import image50 from "./assets/image50.png";

import big1 from "./assets/big1.png";
import big2 from "./assets/big2.png";
import big3 from "./assets/big3.png";

import sliderOneHero from "./assets/sliderOneHero.png";
import slider2Hero from "./assets/slider2Hero.png";
import slider3Hero from "./assets/slider3Hero.png";
import background from "./assets/background.png";

import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { sendDataToGA } from "./utils/events.ts";

type BenefitRowProps = {
  iconSrc: string;
  title: string;
  subtitle: string;
};

const BenefitRow = ({ iconSrc, title, subtitle }: BenefitRowProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    }}
  >
    <img src={iconSrc} alt="" width={40} height={40} />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography.Text tag="p" view="primary-small" style={{ marginBottom: 0 }}>
        {title}
      </Typography.Text>
      <Typography.Text
        tag="p"
        view="primary-small"
        color="secondary"
        style={{ marginBottom: 0 }}
      >
        {subtitle}
      </Typography.Text>
    </div>
  </div>
);

export const App = () => {
  const [step, setStep] = useState(0);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [currentSlide, setCurrentSlide] = useState(1);
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClickOne = ({
    img,
    price,
    type,
  }: {
    img: string;
    price: number;
    type: string;
  }) => {
    setImg(img);
    setPrice(price);
    setLoading(true);

    sendDataToGA({ type }).then(() => {
      setLoading(false);
      setStep(1);
    });
  };

  const handleClickSubmit = () => {
    window.gtag("event", "6293_get_sub_2", {
      variant_name: "ghk_6293_4",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      {step === 0 && (
        <div className={appSt.container}>
          <Gap size={20} />
          <div style={{ width: "100%" }}>
            <Swiper
              pagination={false}
              modules={[Pagination]}
              className="mySwiper"
              centeredSlides
              centeredSlidesBounds
              spaceBetween={8}
              slidesPerView="auto"
              initialSlide={currentSlide}
              style={{ paddingLeft: "32px", paddingRight: "32px" }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            >
              <SwiperSlide
                style={{
                  width: "296px",
                  height: "543px",
                }}
              >
                <div className={appSt.cardContainer}>
                  <div className={appSt.header}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <Typography.TitleResponsive
                          font="system"
                          tag="h3"
                          view="small"
                          className={appSt.productsTitle}
                          style={{ fontSize: "20px" }}
                        >
                          9 привилегий
                        </Typography.TitleResponsive>
                        <Gap size={4} />
                        <Typography.Text
                          tag="p"
                          view="primary-small"
                          style={{ marginBottom: 0, color: "white" }}
                        >
                          Первый месяц бесплатно, дальше — 199 ₽ в месяц
                        </Typography.Text>
                      </div>
                      <img src={sliderOneHero} alt="" width={80} height={80} />
                    </div>
                    <Gap size={24} />
                  </div>

                  <div className={appSt.footer}>
                    <Gap size={32} />
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <Typography.Text
                        tag="p"
                        view="primary-medium"
                        style={{ marginBottom: 0, fontWeight: "500" }}
                      >
                        Топ-привилегии
                      </Typography.Text>
                    </div>
                    <Gap size={16} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <BenefitRow
                        iconSrc={image1}
                        title="3 категории кэшбэка"
                        subtitle="На выбор каждый месяц"
                      />
                      <BenefitRow
                        iconSrc={image2}
                        title="5 000 ₽ в месяц"
                        subtitle="Лимит кэшбэка в категориях"
                      />
                      <BenefitRow
                        iconSrc={image3}
                        title="1 прокрутка барабана"
                        subtitle="Шанс выиграть до 100% кэшбэка"
                      />
                    </div>
                    <Gap size={32} />
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <Typography.Text
                        tag="p"
                        view="primary-large"
                        style={{ marginBottom: 0 }}
                      >
                        Другие привилегии
                      </Typography.Text>
                    </div>
                    <Gap size={16} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <BenefitRow
                        iconSrc={image4}
                        title="Эксклюзивный кэшбэк"
                        subtitle="Специальные предложения от партнёров"
                      />
                      <BenefitRow
                        iconSrc={image5}
                        title="Бесплатное обслуживание"
                        subtitle="По дебетовой Альфа-Карте"
                      />
                      <BenefitRow
                        iconSrc={image6}
                        title="Бесплатные переводы без ограничений"
                        subtitle="В любые банки другим людям"
                      />
                      <BenefitRow
                        iconSrc={image7}
                        title="Снятие наличных до 200 000 ₽"
                        subtitle="Без комиссии в любых банках России"
                      />
                      <BenefitRow
                        iconSrc={image8}
                        title="Бесплатные уведомления"
                        subtitle="По дебетовым картам"
                      />
                      <BenefitRow
                        iconSrc={image9}
                        title="Персональная поддержка"
                        subtitle="Выделенная линия в чате"
                      />
                    </div>
                    <Gap size={96} />
                    <div
                      className={appSt.bottomBtn}
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        width: "calc(100% - 32px)",
                      }}
                    >
                      <ButtonMobile
                        loading={loading}
                        block
                        view="primary"
                        onClick={() =>
                          handleClickOne({
                            img: big1,
                            price: 199,
                            type: "9 привилегий",
                          })
                        }
                      >
                        Мне подходит
                      </ButtonMobile>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "296px",
                  height: "543px",
                }}
              >
                <div className={appSt.cardContainer}>
                  <div
                    className={appSt.header}
                    style={{ backgroundColor: "#BA3DD8", paddingRight: "4px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <Typography.TitleResponsive
                          font="system"
                          tag="h3"
                          view="small"
                          className={appSt.productsTitle}
                          style={{ fontSize: "20px" }}
                        >
                          15 привилегий
                        </Typography.TitleResponsive>
                        <Gap size={4} />
                        <Typography.Text
                          tag="p"
                          view="primary-small"
                          style={{ marginBottom: 0, color: "white" }}
                        >
                          Первый месяц бесплатно, дальше — 399 ₽ в месяц
                        </Typography.Text>
                      </div>
                      <img src={slider2Hero} alt="" width={80} height={80} />
                    </div>
                    <Gap size={24} />
                  </div>

                  <div className={appSt.footer}>
                    <Gap size={32} />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <Typography.Text
                        tag="p"
                        view="primary-medium"
                        style={{ marginBottom: 0, fontWeight: "500" }}
                      >
                        Топ-привилегии
                      </Typography.Text>
                      <div
                        style={{
                          padding: "4px 16px",
                          borderRadius: "16px",
                          backgroundImage: `url(${background})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <Typography.Text
                          tag="p"
                          view="primary-small"
                          style={{ marginBottom: 0, color: "white" }}
                        >
                          Рекомендуем
                        </Typography.Text>
                      </div>
                    </div>
                    <Gap size={16} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <BenefitRow
                        iconSrc={image10}
                        title="4 категории кэшбэка"
                        subtitle="Включая 1 популярную категорию"
                      />
                      <BenefitRow
                        iconSrc={image11}
                        title="7 000 ₽ в месяц"
                        subtitle="Лимит кэшбэка в категориях"
                      />
                      <BenefitRow
                        iconSrc={image12}
                        title="2 прокрутки барабана"
                        subtitle="Выше шанс выиграть до 100% кэшбэка"
                      />
                      <BenefitRow
                        iconSrc={image13}
                        title="+2% годовых к ставке по Альфа-Счёту"
                        subtitle="На ежедневный остаток"
                      />
                      <BenefitRow
                        iconSrc={image14}
                        title="Бесплатная мобильная связь"
                        subtitle="100 минут, 3 ГБ и безлимитные мессенджеры"
                      />
                    </div>
                    <Gap size={32} />
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <Typography.Text
                        tag="p"
                        view="primary-large"
                        style={{ marginBottom: 0 }}
                      >
                        Другие привилегии
                      </Typography.Text>
                    </div>
                    <Gap size={16} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <BenefitRow
                        iconSrc={image15}
                        title="Семейный доступ за 300 ₽"
                        subtitle="До 2 участников на уровне"
                      />
                      <BenefitRow
                        iconSrc={image16}
                        title="Эксклюзивный кэшбэк"
                        subtitle="Специальные предложения от партнёров"
                      />
                      <BenefitRow
                        iconSrc={image17}
                        title="0,24% комиссия за сделки на бирже"
                        subtitle="С ценными бумагами и валютой"
                      />
                      <BenefitRow
                        iconSrc={image18}
                        title="Бесплатное обслуживание"
                        subtitle="По дебетовой Альфа-Карте"
                      />
                      <BenefitRow
                        iconSrc={image19}
                        title="Пропуск платежа по кредитной карте"
                        subtitle="Без штрафов и просрочек"
                      />
                      <BenefitRow
                        iconSrc={image20}
                        title="+40 дней без % по кредитной карте"
                        subtitle="Больше времени погасить долг"
                      />
                      <BenefitRow
                        iconSrc={image21}
                        title="Бесплатные переводы без ограничений"
                        subtitle="В любые банки другим людям"
                      />
                      <BenefitRow
                        iconSrc={image22}
                        title="Снятие наличных до 200 000 ₽"
                        subtitle="Без комиссии в любых банках России"
                      />
                      <BenefitRow
                        iconSrc={image23}
                        title="Бесплатные уведомления"
                        subtitle="По дебетовой Альфа-Карте"
                      />
                      <BenefitRow
                        iconSrc={image24}
                        title="Персональная поддержка"
                        subtitle="Выделенная линия в чате"
                      />
                    </div>
                    <Gap size={96} />
                    <div
                      className={appSt.bottomBtn}
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        width: "calc(100% - 32px)",
                      }}
                    >
                      <ButtonMobile
                        loading={loading}
                        block
                        view="primary"
                        onClick={() =>
                          handleClickOne({
                            img: big2,
                            price: 399,
                            type: "15 привилегий",
                          })
                        }
                      >
                        Мне подходит
                      </ButtonMobile>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "296px",
                  height: "543px",
                }}
              >
                <div className={appSt.cardContainer}>
                  <div
                    className={appSt.header}
                    style={{ backgroundColor: "#FA9313" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <Typography.TitleResponsive
                          font="system"
                          tag="h3"
                          view="small"
                          className={appSt.productsTitle}
                          style={{ fontSize: "20px" }}
                        >
                          18 привилегий
                        </Typography.TitleResponsive>
                        <Gap size={4} />
                        <Typography.Text
                          tag="p"
                          view="primary-small"
                          style={{ marginBottom: 0, color: "white" }}
                        >
                          Первый месяц бесплатно, дальше — 999 ₽ в месяц
                        </Typography.Text>
                      </div>
                      <img src={slider3Hero} alt="" width={80} height={80} />
                    </div>
                    <Gap size={24} />
                  </div>

                  <div className={appSt.footer}>
                    <Gap size={32} />
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <Typography.Text
                        tag="p"
                        view="primary-medium"
                        style={{ marginBottom: 0, fontWeight: "500" }}
                      >
                        Топ-привилегии
                      </Typography.Text>
                    </div>
                    <Gap size={16} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <BenefitRow
                        iconSrc={image25}
                        title="5 категорий кэшбэка"
                        subtitle="Включая 2 популярные категории"
                      />
                      <BenefitRow
                        iconSrc={image26}
                        title="10 000 ₽ в месяц"
                        subtitle="Лимит кэшбэка в категориях"
                      />
                      <BenefitRow
                        iconSrc={image27}
                        title="2 прокрутки барабана"
                        subtitle="Выше шанс выиграть до 100% кэшбэка"
                      />
                      <BenefitRow
                        iconSrc={image28}
                        title="+2% годовых к ставке по Альфа-Счёту"
                        subtitle="На ежедневный остаток"
                      />
                      <BenefitRow
                        iconSrc={image29}
                        title="Бесплатная мобильная связь"
                        subtitle="200 минут, 6 ГБ и безлимитные мессенджеры"
                      />
                      <BenefitRow
                        iconSrc={image30}
                        title="Семейный доступ за 0 ₽"
                        subtitle="До 2 участников на уровне"
                      />
                    </div>
                    <Gap size={32} />
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <Typography.Text
                        tag="p"
                        view="primary-large"
                        style={{ marginBottom: 0 }}
                      >
                        Другие привилегии
                      </Typography.Text>
                    </div>
                    <Gap size={16} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <BenefitRow
                        iconSrc={image31}
                        title="Эксклюзивный кэшбэк"
                        subtitle="Специальные предложения от партнёров"
                      />
                      <BenefitRow
                        iconSrc={image50}
                        title="0,24% комиссия за сделки на бирже"
                        subtitle="С ценными бумагами и валютой"
                      />
                      <BenefitRow
                        iconSrc={image32}
                        title="Повышенная ставка по вкладу"
                        subtitle="Больше доход по накоплениям"
                      />
                      <BenefitRow
                        iconSrc={image33}
                        title="Бесплатное обслуживание"
                        subtitle="По дебетовой Альфа-Карте"
                      />
                      <BenefitRow
                        iconSrc={image34}
                        title="Пропуск платежа по кредитной карте"
                        subtitle="Без штрафов и просрочек"
                      />
                      <BenefitRow
                        iconSrc={image35}
                        title="+40 дней без % по кредитной карте"
                        subtitle="Больше времени погасить долг"
                      />
                      <BenefitRow
                        iconSrc={image36}
                        title="Бесплатные переводы без ограничений"
                        subtitle="В любые банки другим людям"
                      />
                      <BenefitRow
                        iconSrc={image37}
                        title="Снятие наличных до 200 000 ₽"
                        subtitle="Без комиссии в любых банках России"
                      />
                      <BenefitRow
                        iconSrc={image38}
                        title="Бесплатные уведомления"
                        subtitle="По дебетовой Альфа-Карте"
                      />
                      <BenefitRow
                        iconSrc={image39}
                        title="Бесплатные уведомления"
                        subtitle="По кредитной Альфа-Карте"
                      />
                      <BenefitRow
                        iconSrc={image40}
                        title="Персональная поддержка"
                        subtitle="Выделенная линия в чате"
                      />
                      <BenefitRow
                        iconSrc={image41}
                        title="Приоритетное обслуживание"
                        subtitle="Ваши обращения вне очереди"
                      />
                    </div>
                    <Gap size={96} />
                    <div
                      className={appSt.bottomBtn}
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        width: "calc(100% - 32px)",
                      }}
                    >
                      <ButtonMobile
                        loading={loading}
                        block
                        view="primary"
                        onClick={() =>
                          handleClickOne({
                            img: big3,
                            price: 999,
                            type: "18 привилегий",
                          })
                        }
                      >
                        Мне подходит
                      </ButtonMobile>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}

      {step === 1 && (
        <div
          style={{
            backgroundColor: "white",
            padding: "0 16px",
          }}
        >
          <Gap size={32} />
          <img
            src={img}
            alt=""
            width={264}
            height={264}
            style={{ display: "block", margin: "0 auto" }}
          />
          <Gap size={32} />
          <Typography.TitleResponsive
            font="system"
            tag="h3"
            view="medium"
            defaultMargins
          >
            Хотите перейти на уровень Альфа-Смарт?
          </Typography.TitleResponsive>
          <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
            Привилегий станет больше — пользуйтесь ими 1 месяц бесплатно, дальше{" "}
            {price} ₽
          </Typography.Text>
          <Gap size={48} />
        </div>
      )}

      {step === 1 && (
        <div className={appSt.bottomBtn}>
          <ButtonMobile block view="primary" onClick={handleClickSubmit}>
            Перейти
          </ButtonMobile>
          <Gap size={4} />
          <ButtonMobile block view="secondary" onClick={() => setStep(0)}>
            Вернуться к выбору
          </ButtonMobile>
        </div>
      )}
    </>
  );
};
