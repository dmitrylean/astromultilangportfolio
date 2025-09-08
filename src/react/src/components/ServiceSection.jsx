import React from "react";
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Wordpress</h2>
        <p className="service-subtitle">
          Wordpress позволяет быстро создавать сайты используя гибридный подход
          из кода и готовых блоков. Огромный выбор плагинов позволяет сделать
          кастомное решение под любые задачи.
        </p>
        <div className="services-content">

          <div className="services-list">
            <div className="service-item">
              <div className="service-text">
                <h3>Лендинг</h3>
                <p>
                  Однаостраничный сайт сверстанный на html/css/js и перенесенный
                  на Wordpress
                </p>
              </div>
              <div className="service-price">от 10 000 ₽</div>
            </div>

            <div className="service-item">
              <div className="service-text">
                <h3>Многостраничный сайт</h3>
                <p>Веб-сайт до 5 страниц</p>
              </div>
              <div className="service-price">от 20 000 ₽</div>
            </div>

            <div className="service-item">
              <div className="service-text">
                <h3>Интернет магазин</h3>
                <p>Веб-сайт от 5 страниц</p>
              </div>
              <div className="service-price">от 40 000 ₽</div>
            </div>
          </div>
        </div>

        <h2 className="services-title">React, Astro, Svelte</h2>
        <p className="service-subtitle">
          У JS-фреймворков специфичные задачи. Как правило такие проекты требуют
          команды разработчиков и больших ресурсов. В данном прайс-листе указаны
          цены на лендинг. Средняя ставка в час - 1500-2000р.
        </p>

        <div className="services-list">
          <div className="service-item">
            <div className="service-text">
              <h3>Astro</h3>
              <p>
                SSG (Static Site Generator) позволяющий за пару вчеров сделать
                контентный проект (лендинг, блог, портфолио, документация).
                Благодаря своей "всеядности" позволяет работать с React,
                Tailwind, Svelte и кучей других технологий.
              </p>
            </div>
            <div className="service-price">от 1500 ₽/час</div>
          </div>

          <div className="service-item">
            <div className="service-text">
              <h3>React</h3>
              <p>
                React - это SPA, позволяющий осуществлять динамическую загрузку
                контента. Используется в стартапах и крупных компаниях для
                создания веб-сервисов.
              </p>
            </div>
            <div className="service-price">от 2500 ₽/час</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
