const pageContacts = () => {
    return {
        template: `    <div>
        <h1>Напишите нам</h1>
        <form action="#">
            <fieldset>
                <div class="input_field"><span>Ваше имя</span>
                    <input type="text" placeholder="Ваше имя" required></div>
                <div class="input_field"><span>Email</span>
                    <input id="email" onclick="$('#email').popover();" type="email" placeholder="Email" required
                           data-toggle="popover" data-placement="bottom"
                           data-content="Ваш электронный адрес никому не будет показан."></div>
                <div class="input_field"><span>Тема</span>
                    <input type="text" placeholder="Тема сообщения" required></div>
                <textarea name="message" id="message" cols="60" rows="5" placeholder="Текст сообщения"
                          required></textarea>
                <hr>
                <div class="input-group">
                    <input type="submit" class="form-control btn-primary">
                    <input type="reset" class="form-control btn-secondary">
                </div>
            </fieldset>
        </form>
        <br><br>
        <h2>Адрес</h2>
        <p class="addr"><img src="img/phone.png"><b>Телефон:</b> <a href="callto:+79991234567">+7(999)123-45-67</a></p>
        <p class="addr"><img src="img/address.png"><b>Почтовый адрес:</b> г.Симферополь, ул.Ленина, 23</p>
        <p class="addr"><img src="img/email.png"><b>Email:</b> <a href="mailto:avalon@mail.ru">avalon@mail.ru</a></p>
        <p class="addr"><img src="img/moneta.png">Принимаем все виды оплаты. Доставка в любой регион Росии транспортными
            компаниями.</p>
        <br>
        <h2>Карта</h2>
        <div class="karta">
            <component is="script" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A549f251a6b397bbf4c2d5a56d5f64fee1d882083791bf98fe0aa1309fb9965c6&amp;width=100%25&amp;height=374&amp;lang=ru_RU&amp;scroll=true" async></component>
        </div>
    </div>`
    }
};
