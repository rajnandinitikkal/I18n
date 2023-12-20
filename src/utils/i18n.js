import languageconfig from './lang.json'

const I18n = (keyword,placeholder,value) =>{
const lang =localStorage.getItem("lang")|| "mr";

const text = languageconfig[lang][keyword];

if(placeholder && value){
    return text.replace
    (placeholder,value);
}
return text;
}

export default I18n;