#### Основные этапы загрузки страницы 

1. **Парсинг HTML и создание DOM**:
- Браузер начинает парсить HTML документ и строить DOM-дерево

2. **Обнаружение внешнего CSS**:
- После загрузки CSS браузер создает CSSOM
- Парсинг HTML продолжается, однако приостанавливается рендеринг страницы до полной загрузки

3. **Обнаружение внешнего JavaScript**:
- Парсинг HTML приостаналвивается до завершения загрузки и выполнения скрипта

4. **Создание дерева рендеринга**:
- Браузер объединяет DOM и CSSOM, создавая дерево рендеринга, после чего начинается отрисовка страницы


#### Асинхронный и отложенный JavaScript

- **`async`** Скрипт загружается асинхронно с парсингом HTML и вызывается сразу после загрузки. Скрипт может выполнится как до DOMContentLoaded так и после

- **`defet`** Скрипт загружается асинхронно и выполняется после завершения парсинга HTML, но перед событием DOMContentLoaded


#### События жизненного цикла страницы

1. **DOMContentLoaded**: Событие срабатывает, когда весь HTML был полность загружен и пропарсен, НО без ожидания завершения загрузки внешних ресурсов (таких как изображений и стили)

2. **load**: Событие срабатывает, когда весь ресурс был загружен. Включая изображения, стили и тд

3. **beforeunload**: Срабаитывает перед тем, как пользователь покидает страинцу

4. **unload**: Возникает когда страница полностью выгружена из памяти браузера. Редко используется, но может быть применена с целью отправки данных на сервер, в момент закрытия страницы (аналика) 
