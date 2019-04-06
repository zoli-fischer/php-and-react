<?php

function getArticles($data) {
    $articles = [];
    for ($i = 0; $i < $data['count']; $i++) {
        $articles[] = getArticleData(['id' => rand(8, 78)]);
    }
    return (object)[
        "count" => $data['count'],
        "articles" => $articles
    ];
}

function getArticleData($data) {
    return (object)[
        "id" => $data['id'],
        "data" => getRandomText()
    ];
}

function getRandomText() {
    $paragraphs = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar risus quis arcu tincidunt, eu faucibus ante porttitor. Quisque ac augue ac ex euismod maximus sed sit amet eros. Nam eget iaculis elit, id vestibulum lorem. Vestibulum quam ipsum, suscipit id lobortis ac, tempor rhoncus ipsum. Proin accumsan pulvinar semper. Vestibulum ultricies, ipsum ac cursus dignissim, ante purus fermentum magna, nec gravida felis dui quis ligula. Vivamus a metus quis nulla pellentesque ornare sed in velit.",
        "Duis quis massa vitae magna sollicitudin fringilla in ut leo. Phasellus sapien nibh, ultrices rutrum tortor non, congue porta ipsum. Donec id risus augue. Proin in risus semper, lacinia ante et, tempus nulla. In fermentum aliquam nisl vitae ornare. Vivamus imperdiet suscipit leo eu accumsan. Sed sollicitudin elit in turpis sodales, vitae blandit augue fermentum.",
        "Donec mattis erat sed leo faucibus maximus. Suspendisse potenti. Etiam laoreet, diam feugiat dignissim mattis, ipsum lectus dapibus mi, quis ullamcorper lectus massa at arcu. Curabitur eget dui eu turpis malesuada molestie. Integer sed consequat nulla, pellentesque aliquam tortor. Maecenas ut lorem consectetur mi eleifend bibendum. Sed vehicula, massa in hendrerit vulputate, urna lorem viverra leo, vel malesuada enim lacus non mauris. Quisque tempus arcu sit amet tellus ullamcorper, non vestibulum risus pretium. Phasellus hendrerit tortor luctus ipsum consectetur, nec pretium massa euismod. Aliquam nec purus imperdiet, vestibulum sem nec, posuere libero. Sed maximus justo sed bibendum maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis non nisl tortor. Proin consectetur erat ex, et laoreet sapien viverra at. Nunc id metus eget nisl elementum mattis.",
        "Donec quis suscipit est. Ut ut laoreet purus. Donec in massa mauris. Morbi eget enim ac elit pretium aliquam vel id orci. Phasellus accumsan urna eu ullamcorper tempus. Donec venenatis, lectus non placerat congue, mi nulla sollicitudin nulla, nec sodales erat urna at nisl. Sed mattis volutpat vestibulum. Aliquam nunc lorem, interdum eget magna luctus, tempor ultricies ipsum. Nullam tristique arcu augue, nec dapibus enim blandit et. Maecenas lectus metus, congue quis lobortis sit amet, vestibulum et dui. Phasellus rhoncus, nisl nec feugiat semper, turpis nulla fermentum dolor, eget fringilla odio tellus et enim. Nam in congue lorem, in pellentesque eros. Maecenas eu lacus vel velit dapibus maximus ut quis elit. Maecenas vitae ipsum et ex sodales fringilla sed varius turpis. Praesent nec augue sed libero fermentum gravida nec ac sem.",
        "Quisque convallis dignissim sapien, non gravida urna commodo sed. Nullam commodo bibendum venenatis. Etiam accumsan augue non malesuada faucibus. Quisque id turpis dui. Vestibulum sed neque ex. Etiam pulvinar diam purus, quis auctor mauris bibendum eget. In venenatis lectus vitae mi aliquam suscipit. Pellentesque eleifend purus orci, consequat pulvinar nisl sodales ut. Praesent id imperdiet nisl. Aliquam auctor pulvinar erat et gravida. In hac habitasse platea dictumst. Curabitur congue, turpis scelerisque feugiat tincidunt, dolor arcu tincidunt erat, a faucibus purus diam congue lorem."
    ];
    $return = [];

    $count = rand(2, 5);
    for ($i = 0; $i < $count; $i++) {
        $return[] = $paragraphs[rand(0, count($paragraphs) - 1)];
    }

    return implode("\n", $return);
}
