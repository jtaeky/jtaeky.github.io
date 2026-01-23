const blogPosts = document.getElementById("blog-posts")
const title = document.getElementById("title")
const content = document.getElementById("content")
const sub = document.getElementById("submit")

function genPost(e){
    e.preventDefault()
    blogPosts.innerHTML+= `
        <div class="post">
            <h3>${title.value}</h3>
            <p>${content.value}</p>
        </div>`

    title.value = ""
    content.value = ""
}

sub.addEventListener("click", genPost)