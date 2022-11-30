    const ip=/([\d+\.]){2,5}([\d+]\b)/;
    const email=/\w+@\w/;
    const domain=/([a-z]+\.){1,5}([A-z0-9]+\b)/;

export default function useInputParser(str){
    if(ip.test(str)){
        return `&ipAddress=${str}`
    }else if(email.test(str)){
        return `&email=${str}`
    }else if(domain.test(str)){
        return `&domain=${str}`
    }else{
        return ''
    }

    



}