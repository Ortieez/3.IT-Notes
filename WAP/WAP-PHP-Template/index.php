<?

function fill_template($template, $data) {
    $result = $template;
    foreach ($data as $key => $value) {
        $result = str_replace('{' . $key . '}', $value, $result);
    }
    return $result;
}

// get json data
$json = file_get_contents('./data/articles.json');
$data = json_decode($json, true)["kontakty"];

// get template
$template = file_get_contents('./templates/page.html');

// fill template
$result = fill_template($template, $data);

// output
echo $result;