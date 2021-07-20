const roomsFromArray = ['מ-', '0', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '8', '9', '10', '11', '12']
const roomsToArray = ['עד-', '0', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '8', '9', '10', '11', '12']
const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const appartsArray = ['דירה', "דירת גן", " גג/פנטהאוז", " דופלקס", " דירת נופש", ' מרתף/פרטר', ' טריפלקס', ' יחידת דיור', ' סטודיו/לופט']
const housesArray = [" בית פרטי/קוטג'", ' דו משפחתי', ' משק חקלאי/נחלה', ' משק עזר']
const othersArray = [' מגרשים', ' דיור מוגן', ' בניין מגורים', ' מחסן', ' חניה', " קב' רכישה/ זכות לנכס", ' כללי'];
const propertiesNamesArray = ['מיזוג', 'ממ"ד', 'מחסן', 'דלתות פנדור', "ריהוט", 'גישה לנכים', "מעלית", "מזגן תדיראן", "משופצת", "מטבח כשר", "דוד שמש", "סורגים"];
const conditionArray = ['משופץ? חדש מקבלן?', ' חדש מקבלן (לא גרו בו בכלל)', ' חדש (נכס בן עד 5 שנים)', ' משופץ (שופץ ב5 השנים האחרונות)', ' במצב שמור (במצב טוב, לא שופץ)']
const allTypesArray = ['דירה או פנטהאוז?', 'דירה', "דירת גן", " בית פרטי/קוטג'", " גג/פנטהאוז", ' מגרשים', " דופלקס", " דירת נופש",
    ' דו משפחתי', ' מרתף/פרטר', ' טריפלקס', ' יחידת דיור', ' משק חקלאי/נחלה', ' משק עזר', ' דיור מוגן', ' בניין מגורים', ' סטודיו/לופט', ' מחסן', " קב' רכישה/ זכות לנכס", ' חניה', ' כללי']
const allTypesArrayClean = ['דירה', "דירת גן", " בית פרטי/קוטג'", " גג/פנטהאוז", ' מגרשים', " דופלקס", " דירת נופש",
    ' דו משפחתי', ' מרתף/פרטר', ' טריפלקס', ' יחידת דיור', ' משק חקלאי/נחלה', ' משק עזר', ' דיור מוגן', ' בניין מגורים', ' סטודיו/לופט', ' מחסן', " קב' רכישה/ זכות לנכס", ' חניה', ' כללי']



export {
    roomsFromArray,
    roomsToArray,
    appartsArray,
    housesArray,
    othersArray,
    propertiesNamesArray,
    conditionArray,
    allTypesArray,
    allTypesArrayClean,
    floors
}