const root = document.getElementById('app')

//content
const content = document.createElement('div')
content.setAttribute('id','content')

//등록레이아웃
const reg_layout = document.createElement('div')
reg_layout.setAttribute('id','reg_layout')

//등록레이아웃_상단
const lay_top = document.createElement('div')
lay_top.setAttribute('id','lay_top')

//등록레이아웃_상단_좌측
const lay_top_left = document.createElement('div')
lay_top_left.setAttribute('id','lay_top_left')
lay_top_left.innerText = "설문조사 폼 양식"
lay_top.append(lay_top_left)

//등록레이아웃_상단_우측
const lay_top_right = document.createElement('div')
lay_top_right.setAttribute('id','lay_top_right')
lay_top.append(lay_top_right)

//설문조사 제목
const title = document.createElement('div')
title.setAttribute('id','title')
title.innerText = "설문조사 제목"
const title_input = document.createElement('input')
title_input.setAttribute('type','text')
title_input.setAttribute('id','title_input')
title.append(title_input)

//설명
const dscr = document.createElement('div')
dscr.setAttribute('id','dscr')
dscr.innerText = "설명"
const dscr_input = document.createElement('textarea')
dscr_input.setAttribute('id','dscr_input')
dscr.append(dscr_input)

//항목
const Q_area = document.createElement('div')
Q_area.setAttribute('id','Q_area')    
Q_area.innerText="항목"

//항목 추가 버튼
popup_check = 0
const add_Q_btn = document.createElement('input')
add_Q_btn.setAttribute('type','button')
add_Q_btn.setAttribute('value','+')
add_Q_btn.setAttribute('onclick','popup_display()')
Q_area.append(add_Q_btn)

reg_layout.append(lay_top)

reg_layout.append(title)

reg_layout.append(dscr)

reg_layout.append(Q_area)

content.append(reg_layout)
root.append(content)

function popup_display(){
    if(popup_check == 0){
        //항목 추가 팝업
        const popup = document.createElement('div')
        popup.setAttribute('id','popup')
    
        //팝업 - 항목 제목
        const popup_title = document.createElement('div')
        popup_title.setAttribute('id','popup_title')
        popup_title.innerText = "항목 제목"
        const popup_title_input = document.createElement('input')
        popup_title_input.setAttribute('type','text')
        popup_title_input.setAttribute('id','title_input')
        popup_title.append(popup_title_input)
        popup.append(popup_title)   
        
        //팝업 - 옵션
        const popup_opt = document.createElement('div')
        popup_opt.setAttribute('id','popup_opt')
        popup_opt.innerText = "옵션"
        
        //팝업 - 옵션 추가 버튼
        const add_opt_btn = document.createElement('input')
        add_opt_btn.setAttribute('type','button')
        add_opt_btn.setAttribute('value','추가')
        add_opt_btn.setAttribute('onclick','add_opt()')
        popup_opt.append(add_opt_btn)
        
        //팝업 - 옵션 입력
        for(let i=1; i<=4; i++){
            const opt_div = document.createElement('div')
            opt_div.setAttribute('id', 'opt_'+i)
            const popup_opt_input = document.createElement('input')
            popup_opt_input.setAttribute('type','text')
            popup_opt_input.setAttribute('id','opt_in_'+i)
            opt_div.append(popup_opt_input)

            //옵션 삭제 버튼
            const del_opt_btn = document.createElement('input')
            del_opt_btn.setAttribute('id', 'del_btn_'+i)
            del_opt_btn.setAttribute('type', 'button')
            del_opt_btn.setAttribute('value', '삭제')
            del_opt_btn.setAttribute('onclick', 'del_opt(this)')
            opt_div.append(del_opt_btn)
            popup_opt.append(opt_div)
        }   
        //팝업 - 옵션 확인,취소 div
        const popup_footer = document.createElement('div')
        popup_footer.setAttribute('id','popup_footer')
        popup.append(popup_footer)

        //팝업 - 확인 버튼
        const confirm_opt_btn = document.createElement('input')
        confirm_opt_btn.setAttribute('type','button')
        confirm_opt_btn.setAttribute('value','확인')
        confirm_opt_btn.setAttribute('onclick','popup_confirm()')
        popup_footer.append(confirm_opt_btn)
        
        //팝업 - 취소 버튼
        const close_opt_btn = document.createElement('input')
        close_opt_btn.setAttribute('type','button')
        close_opt_btn.setAttribute('value','취소')
        close_opt_btn.setAttribute('onclick','popup_close()')
        popup_footer.append(close_opt_btn)

        popup.append(popup_opt)
        popup.append(popup_footer)
        reg_layout.append(popup)
    }
    popup_check=1
}

i=5
function add_opt(){
    const popup_opt = document.getElementById('popup_opt')
    const opt_div = document.createElement('div')
    opt_div.setAttribute('id', 'opt_'+i)
    const popup_opt_input = document.createElement('input')
    popup_opt_input.setAttribute('type','text')
    popup_opt_input.setAttribute('id','opt_in_'+i)
    opt_div.append(popup_opt_input)

    //옵션 삭제 버튼
    const del_opt_btn = document.createElement('input')
    del_opt_btn.setAttribute('id', 'del_btn_'+i)
    del_opt_btn.setAttribute('type', 'button')
    del_opt_btn.setAttribute('value', '삭제')
    del_opt_btn.setAttribute('onclick', 'del_opt(this)')
    opt_div.append(del_opt_btn)
    popup_opt.append(opt_div)
    popup_opt.appendChild(opt_div)
    i++
}
function del_opt(del_btn){
    del_btn.parentNode.remove()
}

function popup_close(){
    let popup = document.getElementById('popup')
    popup.remove()
    popup_check = 0
}
j=1
function popup_confirm(){
    //항목이 추가되어야 하는 곳
    const Q_area = document.getElementById('Q_area')
    const QA_div = document.createElement('div')
    QA_div.setAttribute('id','QA_'+j)
    //제목
    const Q = document.createElement('div')
    Q.setAttribute('id', 'Q_'+j)
    const title = document.getElementById('title_input')
    Q.innerText = title.value
    QA_div.append(Q)
    //옵션(보기)
    const opt = document.getElementById('popup_opt')
    opt_cnt = opt.childElementCount-1
    const opt_li = opt.childNodes
    console.log(opt_li[2])
    for(k=2; k<=opt_cnt+1; k++){
        const A = document.createElement('div')
        A.setAttribute('id', 'A_'+j+'_'+k)
        A.innerText = opt_li[k].firstChild.value
        QA_div.append(A)
    }
    Q_area.append(QA_div)
    j++
    popup_close()
}

//CSS
content.setAttribute('class','container flex flex-col bg-sub-color min-h-screen items-center py-6 survey')
reg_layout.setAttribute('class','flex h-248 w-264 bg-white rounded-3xl')
lay_top_left.setAttribute('class','w-79 h-25 text-4xl justify-center font-semibold bg-main-color text-white rounded-tl-3xl')
//pl-8 pr-8-25 pt-6-25 pb-6-5 //flex w-1/5 rounded-r-3xl justify-center items-center text-white text-3xl font-semibold bg-O-primary hover:bg-O-primary-dark hover:text-gray-300 cursor-pointer