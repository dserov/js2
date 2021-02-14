const pageFeedback = () => {
    return {
        template: `<div><h1>Отзывы</h1>
<table class="tbl_harakteristiki">
    <tr>
        <th>Автор</th>
        <th>Содержимое</th>
        <th>Добавлен</th>
            </tr>
                <tr>
                <td>Дмитрий</td>
                <td>Спасибо!</td>
                <td>2020-11-20 22:03:10</td>
                            </tr>
                        <tr>
                <td>Василий</td>
                <td>Все круто!</td>
                <td>2020-11-20 22:02:57</td>
                            </tr>
            </table>
<hr>
    <h2>Новый отзыв</h2>
<form action="?page=feedback" method="post">
    <input type="hidden" name="id" value="">
    <div class="input_field"><span>Имя: </span><input type="text" name="author" value=""
                                                      required placeholder="Введите имя"></div>
    <div class="input_field"><span>Отзыв: </span><textarea name="text" required
                                                           placeholder="Ваш отзыв"></textarea>
    </div>
    <div class="input_field"><span>&nbsp;</span>
                    <button type="submit" name="action" value="add">Добавить отзыв</button>
            </div>
</form></div>`
    }
};
