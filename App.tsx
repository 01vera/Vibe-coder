import React, { useEffect, useCallback } from 'react';

const App: React.FC = () => {
  const handleSmoothScroll = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            // Remove 'visible' class when element leaves viewport to make it disappear
            entry.target.classList.remove('visible'); 
          }
        });
      },
      { threshold: 0.1 } // Снижен порог срабатывания до 0.1 для более раннего запуска анимации
    );
    document.querySelectorAll('.mascot-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg-secondary bg-opacity-80 backdrop-blur-md p-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center max-w-7xl px-4">
          <a href="#hero" className="text-2xl font-bold text-cyan-accent hover:text-purple-accent transition-colors duration-300" onClick={handleSmoothScroll}>Vibe Coder</a>
          <ul className="flex space-x-4 md:space-x-8">
            <li><a href="#about" className="nav-item text-lg md:text-xl font-semibold" onClick={handleSmoothScroll}>Обо мне</a></li>
            <li><a href="#services" className="nav-item text-lg md:text-xl font-semibold" onClick={handleSmoothScroll}>Услуги</a></li>
            <li><a href="#apps" className="nav-item text-lg md:text-xl font-semibold" onClick={handleSmoothScroll}>Приложения</a></li>
            <li><a href="#contacts" className="nav-item text-lg md:text-xl font-semibold" onClick={handleSmoothScroll}>Контакты</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero" className="hero parallax-section min-h-screen flex flex-col justify-center items-center text-center pt-24 md:pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-dark-bg to-dark-bg-secondary">
          <div className="section-content relative z-10 max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-cyan-accent mb-12 drop-shadow-lg leading-tight">НЕТ ШАБЛОНАМ - ТОЛЬКО ТВОЙ УНИКАЛЬНЫЙ САЙТ</h1>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr_1fr] gap-8 items-center mt-12">
              <div className="flex flex-col gap-8">
                {/* Левая колонка - верхняя карточка */}
                <div className="about-text-frame p-4 rounded-xl mascot-fade max-w-sm mx-auto flex flex-col items-center text-center">
                  <img src="https://picsum.photos/400/300?random=10" alt="Проект 1" className="rounded-lg mb-3 w-full h-48 object-cover" />
                  <h3 className="text-cyan-accent text-lg font-semibold mb-2">Корпоративный сайт</h3>
                  <p className="text-text-secondary text-sm">Современный сайт для бизнеса</p>
                </div>
                {/* Левая колонка - нижняя карточка */}
                <div className="about-text-frame p-4 rounded-xl mascot-fade max-w-sm mx-auto flex flex-col items-center text-center">
                  <img src="https://picsum.photos/400/300?random=11" alt="Проект 2" className="rounded-lg mb-3 w-full h-48 object-cover" />
                  <h3 className="text-purple-accent text-lg font-semibold mb-2">Интернет-магазин</h3>
                  <p className="text-text-secondary text-sm">E-commerce с каталогом</p>
                </div>
              </div>
              <div className="mascot-container mascot-fade mascot-bounce flex justify-center items-center">
                {/* Hero mascot: Увеличенный размер */}
                <img src="https://i.ibb.co/Jj95M4Kv/mascot-hero.png" alt="Mascot" className="mascot-img w-[700px] sm:w-[850px] md:w-[1000px] lg:w-[1200px] xl:w-[1400px] h-auto" />
              </div>
              <div className="flex flex-col gap-8">
                {/* Правая колонка - верхняя карточка */}
                <div className="about-text-frame p-4 rounded-xl mascot-fade max-w-sm mx-auto flex flex-col items-center text-center">
                  <img src="https://picsum.photos/400/300?random=12" alt="Проект 3" className="rounded-lg mb-3 w-full h-48 object-cover" />
                  <h3 className="text-cyan-accent text-lg font-semibold mb-2">Лендинг</h3>
                  <p className="text-text-secondary text-sm">Продающий одностраничник</p>
                </div>
                {/* Правая колонка - нижняя карточка */}
                <div className="about-text-frame p-4 rounded-xl mascot-fade max-w-sm mx-auto flex flex-col items-center text-center">
                  <img src="https://picsum.photos/400/300?random=13" alt="Проект 4" className="rounded-lg mb-3 w-full h-48 object-cover" />
                  <h3 className="text-purple-accent text-lg font-semibold mb-2">Портфолио</h3>
                  <p className="text-text-secondary text-sm">Галерея работ</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="marquee">
          <div className="marquee-content">НЕТ ШАБЛОНАМ • ТОЛЬКО ТВОЙ УНИКАЛЬНЫЙ САЙТ • КРЕАТИВНЫЙ ПОДХОД • WEB-РАЗРАБОТКА • НЕТ ШАБЛОНАМ • ТОЛЬКО ТВОЙ УНИКАЛЬНЫЙ САЙТ • КРЕАТИВНЫЙ ПОДХОД • WEB-РАЗРАБОТКА •</div>
        </div>
        <section id="about" className="about parallax-section pt-32 pb-24">
          <div className="section-content relative z-10 p-4 max-w-7xl mx-auto">
            <h2 className="text-center text-purple-accent mb-12 drop-shadow-lg">ПРОСТРАНСТВО, ГДЕ ЦЕНЯТ ИНДИВИДУАЛЬНОСТЬ</h2>
            {/* Main grid container with items-stretch for column height alignment */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
              {/* Left Column - stacks two cards, now filling space vertically */}
              <div className="flex flex-col h-full gap-y-6"> {/* Changed flex-grow to gap-y-6 */}
                {/* Card 1: Technologies */}
                <div className="about-text-frame p-3 rounded-xl w-full sm:w-[22rem] md:w-[26rem] lg:w-[30rem] xl:w-[34rem] mx-auto min-h-[160px] flex flex-col justify-center text-center">
                    <h3 className="text-cyan-accent text-xl font-semibold mb-3">Технологии</h3>
                    <p className="text-text-secondary">Современный стандартный стек веб-разработки для быстрых и надёжных решений.</p>
                </div>

                {/* Removed flexible spacer */}

                {/* Card 2: Approach to Work */}
                <div className="about-text-frame p-3 rounded-xl w-full sm:w-[22rem] md:w-[26rem] lg:w-[30rem] xl:w-[34rem] mx-auto min-h-[160px] flex flex-col justify-center text-center">
                    <h3 className="text-purple-accent text-xl font-semibold mb-3">Подход к работе</h3>
                    <p className="text-text-secondary">Всегда начинаю с глубокого погружения в задачу, изучаю аудиторию, разрабатываю прототип, тестирую. Прозрачность и коммуникация.</p>
                </div>
              </div>

              {/* Right Column - contains one card at the top and mascot at the bottom */}
              <div className="flex flex-col h-full">
                <div className="about-text-frame p-3 rounded-xl w-full sm:w-[22rem] md:w-[26rem] lg:w-[30rem] xl:w-[34rem] mx-auto min-h-[160px] flex flex-col justify-center text-center mb-6"> {/* Updated width, added mb-6 for spacing from mascot */}
                  <h3 className="text-cyan-accent text-xl font-semibold mb-3">Почему меня выбирают</h3>
                  <p className="text-text-secondary mb-3"><strong className="text-purple-accent">Индивидуальный подход:</strong> без шаблонов.</p>
                  <p className="text-text-secondary mb-3"><strong className="text-cyan-accent">Прозрачность:</strong> всегда знаете статус проекта.</p>
                  <p className="text-text-secondary"><strong className="text-purple-accent">Поддержка:</strong> помогаю после запуска.</p>
                </div>
                <div className="mascot-container mascot-fade mascot-slide-right mt-auto flex justify-center"> {/* mt-auto pushes mascot to the bottom */}
                  <img src="https://i.ibb.co/yFt2ZS6D/mascot-about.png" alt="Mascot" className="mascot-img w-[28rem] sm:w-[32rem] md:w-[36rem] lg:w-[40rem] xl:w-[44rem] h-auto" /> {/* Updated mascot width for balance */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="pt-24 pb-16">
          <div className="section-content relative z-10 p-4 max-w-7xl mx-auto">
            <h2 className="text-center text-cyan-accent mb-12 drop-shadow-lg">НЕ ПРОСТО САЙТ - ЭТО ТВОЯ ЛИЧНАЯ ДЕТАЛИЗАЦИЯ</h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch"> {/* Main 2-column grid for service cards and mascot */}
              {/* Left Column for the main service description card */}
              <div className="flex flex-col"> {/* No gap here, as it's a single item */}
                <div className="about-text-frame p-8 rounded-xl flex flex-col justify-between h-full">
                  <div>
                    <p className="mb-4 text-text-secondary text-lg">Каждый сайт — это произведение искусства, способное преобразить ваш бизнес.</p>
                    <p className="mb-4 text-text-secondary text-lg">От классических до смелых проектов — помогу выбрать именно то, что подчеркнет вашу индивидуальность.</p>
                    <p className="mb-4 text-text-secondary text-lg">Наша цель — вложить в каждый сайт индивидуальность и сделать мечту реальностью.</p>
                    <p className="mb-4 text-text-secondary text-lg">Давайте вместе создадим крутой сайт.</p>
                    <p className="text-purple-accent text-xl font-semibold">Дерзкие идеи? Вперед!</p>
                  </div>
                  <a href="#contacts" className="btn text-center mt-6 self-start" onClick={handleSmoothScroll}>УЗНАТЬ СТОИМОСТЬ</a>
                </div>
              </div>

              {/* Right Column for mascot, aligned to bottom */}
              <div className="flex flex-col h-full justify-end"> {/* Pushes mascot to the bottom of this column */}
                <div className="mascot-container mascot-fade mascot-slide-right flex justify-center">
                  <img src="https://i.ibb.co/Rk73nPjp/mascot-services.png" alt="Mascot" className="mascot-img w-80 md:w-96 lg:w-[450px] xl:w-[550px] h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="apps" className="parallax-section pt-24 pb-16"> {/* Добавлен parallax-section, удален bg-gradient-to-br */}
          <div className="section-content relative z-10 p-4 max-w-7xl mx-auto">
            <h2 className="text-center text-purple-accent mb-12 drop-shadow-lg">МОИ ПРИЛОЖЕНИЯ И ИНСТРУМЕНТЫ</h2>
            <p className="text-center text-lg text-text-secondary mb-12 max-w-3xl mx-auto">
              Я создаю полезные мини-приложения для повседневной жизни, работы и учёбы.
              Простые, удобные, бесплатные инструменты для всех.
            </p>
            
            {/* Первый ряд - обычный grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-xl text-center mascot-fade about-text-frame">
                <img src="https://picsum.photos/400/300?random=1" alt="App" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-cyan-accent text-xl mb-2">Калькулятор ИМТ</h3>
                <p className="text-text-secondary text-sm mb-4">Рассчитайте индекс массы тела и узнайте рекомендации по здоровому весу.</p>
                <a href="#" className="text-purple-accent hover:underline text-sm font-semibold">ПОПРОБОВАТЬ</a>
              </div>
              <div className="p-6 rounded-xl text-center mascot-fade about-text-frame">
                <img src="https://picsum.photos/400/300?random=2" alt="App" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-purple-accent text-xl mb-2">Кулинарная книга</h3>
                <p className="text-text-secondary text-sm mb-4">Генератор рецептов на основе ваших ингредиентов. Что приготовить из того, что есть?</p>
                <a href="#" className="text-purple-accent hover:underline text-sm font-semibold">ПОПРОБОВАТЬ</a>
              </div>
              <div className="p-6 rounded-xl text-center mascot-fade about-text-frame">
                <img src="https://picsum.photos/400/300?random=3" alt="App" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-cyan-accent text-xl mb-2">Репетитор английского</h3>
                <p className="text-text-secondary text-sm mb-4">Тренажёр для изучения слов, грамматики и произношения. Учите язык эффективно!</p>
                <a href="#" className="text-purple-accent hover:underline text-sm font-semibold">ПОПРОБОВАТЬ</a>
              </div>
            </div>

            {/* Второй ряд - бегущая строка карточек */}
            <div className="apps-marquee overflow-hidden">
              <div className="apps-marquee-content flex gap-8">
                <div className="p-6 rounded-xl text-center flex-shrink-0 w-80 about-text-frame">
                  <img src="https://picsum.photos/400/300?random=4" alt="App" className="rounded-lg mb-4 w-full h-48 object-cover" />
                  <h3 className="text-purple-accent text-xl mb-2">Генератор паролей</h3>
                  <p className="text-text-secondary text-sm mb-4">Создавайте надёжные пароли одним кликом. Защитите свои аккаунты!</p>
                  <a href="#" className="text-purple-accent hover:underline text-sm font-semibold">ПОПРОБОВАТЬ</a>
                </div>
                <div className="p-6 rounded-xl text-center flex-shrink-0 w-80 about-text-frame">
                  <img src="https://picsum.photos/400/300?random=5" alt="App" className="rounded-lg mb-4 w-full h-48 object-cover" />
                  <h3 className="text-cyan-accent text-xl mb-2">Планировщик задач</h3>
                  <p className="text-text-secondary text-sm mb-4">Организуйте работу и личные дела. Простой и эффективный To-Do список.</p>
                  <a href="#" className="text-purple-accent hover:underline text-sm font-semibold">ПОПРОБОВАТЬ</a>
                </div>
                <div className="p-6 rounded-xl text-center flex-shrink-0 w-80 about-text-frame">
                  <img src="https://picsum.photos/400/300?random=6" alt="App" className="rounded-lg mb-4 w-full h-48 object-cover" />
                  <h3 className="text-cyan-accent text-xl mb-2">Конвертер единиц</h3>
                  <p className="text-text-secondary text-sm mb-4">Мгновенная конвертация между единицами измерения: длина, вес, температура.</p>
                  <a href="#" className="text-purple-accent hover:underline text-sm font-semibold">ПОПРОБЫВАТЬ</a>
                </div>
                {/* Дублируем карточки для бесшовного loop */}
                <div className="p-6 rounded-xl text-center flex-shrink-0 w-80 about-text-frame">
                  <img src="https://picsum.photos/400/300?random=7" alt="App" className="rounded-lg mb-4 w-full h-48 object-cover" />
                  <h3 className="text-purple-accent text-xl mb-2">Генератор паролей</h3>
                  <p className="text-text-secondary text-sm mb-4">Создавайте надёжные пароли одним кликом. Защитите свои аккаунты!</p>
                  <a href="#" className="text-purple-accent hover:underline text-sm font-semibold">ПОПРОБОВАТЬ</a>
                </div>
                <div className="p-6 rounded-xl text-center flex-shrink-0 w-80 about-text-frame">
                  <img src="https://picsum.photos/400/300?random=8" alt="App" className="rounded-lg mb-4 w-full h-48 object-cover" />
                  <h3 className="text-cyan-accent text-xl mb-2">Планировщик задач</h3>
                  <p className="text-text-secondary text-sm mb-4">Организуйте работу и личные дела. Простой и эффективный To-Do список.</p>
                  <a href="#" className="text-purple-accent hover:underline text-sm font-semibold">ПОПРОБОВАТЬ</a>
                </div>
                <div className="p-6 rounded-xl text-center flex-shrink-0 w-80 about-text-frame">
                  <img src="https://picsum.photos/400/300?random=9" alt="App" className="rounded-lg mb-4 w-full h-48 object-cover" />
                  <h3 className="text-cyan-accent text-xl mb-2">Конвертер единиц</h3>
                  <p className="text-text-secondary text-sm mb-4">Мгновенная конвертация между единицами измерения: длина, вес, температура.</p>
                  <a href="#" className="text-purple-accent hover:underline text-sm font-semibold">ПОПРОБЫВАТЬ</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" className="bg-gradient-to-br from-dark-bg to-dark-bg-secondary pt-24 pb-16">
          <div className="section-content relative z-10 p-4 max-w-7xl mx-auto">
            <h2 className="text-center text-cyan-accent mb-6 drop-shadow-lg">ОТЗЫВЫ</h2>
            <p className="text-center text-lg text-text-secondary mb-12 max-w-xl mx-auto">те, кто уже СДЕЛАЛ ВЫБОР создать уникальный сайт</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="about-text-frame p-6 rounded-xl mascot-fade">
                <h4 className="review-name text-purple-accent text-xl font-semibold mb-3">Анна Смирнова</h4>
                <p className="review-text text-text-secondary text-base mb-4">Очень довольна результатом! Сайт получился уникальный, стильный, без шаблонов.</p>
                <a href="#" className="text-cyan-accent hover:underline text-sm font-semibold">ЧИТАТЬ ПОЛНОСТЬЮ</a>
              </div>
              <div className="about-text-frame p-6 rounded-xl mascot-fade">
                <h4 className="review-name text-purple-accent text-xl font-semibold mb-3">Иван Петров</h4>
                <p className="review-text text-text-secondary text-base mb-4">Vibe Coder превзошел ожидания. Внимание к деталям и креативность на высшем уровне!</p>
                <a href="#" className="text-cyan-accent hover:underline text-sm font-semibold">ЧИТАТЬ ПОЛНОСТЬЮ</a>
              </div>
              <div className="about-text-frame p-6 rounded-xl mascot-fade">
                <h4 className="review-name text-purple-accent text-xl font-semibold mb-3">Мария Новикова</h4>
                <p className="review-text text-text-secondary text-base mb-4">Корпоративный сайт — произведение искусства! Много комплиментов от клиентов.</p>
                <a href="#" className="text-cyan-accent hover:underline text-sm font-semibold">ЧИТАТЬ ПОЛНОСТЬЮ</a>
              </div>
              <div className="about-text-frame p-6 rounded-xl mascot-fade">
                <h4 className="review-name text-purple-accent text-xl font-semibold mb-3">Дмитрий Волков</h4>
                <p className="review-text text-text-secondary text-base mb-4">Сайт сделан качественно, с учетом всех пожеланий, и главное — с душой.</p>
                <a href="#" className="text-cyan-accent hover:underline text-sm font-semibold">ЧИТАТЬ ПОЛНОСТЬЮ</a>
              </div>
              <div className="about-text-frame p-6 rounded-xl mascot-fade">
                <h4 className="review-name text-purple-accent text-xl font-semibold mb-3">Елена Козлова</h4>
                <p className="review-text text-text-secondary text-base mb-4">Интернет-магазин теперь функционален и выглядит потрясающе!</p>
                <a href="#" className="text-cyan-accent hover:underline text-sm font-semibold">ЧИТАТЬ ПОЛНОСТЬЮ</a>
              </div>
              <div className="about-text-frame p-6 rounded-xl mascot-fade">
                <h4 className="review-name text-purple-accent text-xl font-semibold mb-3">Сергей Кузнецов</h4>
                <p className="review-text text-text-secondary text-base mb-4">Работа выполнена в срок, с высоким качеством. Блог выглядит свежо и современно!</p>
                <a href="#" className="text-cyan-accent hover:underline text-sm font-semibold">ЧИТАТЬ ПОЛНОСТЬЮ</a>
              </div>
            </div>
          </div>
        </section>
        <div className="marquee footer-marquee">
          <div className="marquee-content">СВЯЖИСЬ СО МНОЙ • СОЗДАДИМ ЧТО-ТО КРУТОЕ • TELEGRAM • СВЯЖИСЬ СО МНОЙ • СОЗДАДИМ ЧТО-ТО КРУТОЕ • TELEGRAM •</div>
        </div>
        <section id="contacts" className="pt-24 pb-16">
          <div className="section-content relative z-10 p-4 max-w-7xl mx-auto">
            <h2 className="text-center text-purple-accent mb-12 drop-shadow-lg">ГОТОВЫ СОЗДАТЬ ЧТО-ТО УНИКАЛЬНОЕ?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="about-text-frame p-8 rounded-xl">
                <p className="text-xl font-semibold mb-4 text-cyan-accent">телефон: [+7 XXX-XXX-XX-XX]</p>
                <p className="text-xl font-semibold mb-4 text-purple-accent">telegram: @your_username</p>
              </div>
              <div className="flex justify-center">
                <div className="mascot-container mascot-fade mascot-float">
                  <img src="https://i.ibb.co/XxxqDYcn/mascot-contacts.png" alt="Mascot" className="mascot-img w-[400px] md:w-[500px] lg:w-[700px] xl:w-[800px] h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-dark-bg-secondary text-center p-6 text-sm text-text-secondary border-t border-gray-bg-light">
        <p>&copy; 2024 Vibe Coder. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;