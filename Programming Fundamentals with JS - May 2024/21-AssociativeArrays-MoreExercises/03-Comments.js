function comments(input) {
    let usersList = new Map();
    let articleList = new Map();
    let articleListWithCounts = [];

    for (const command of input) {
        
        if (command.includes('user')) {
            let user = command.slice(5);
            usersList.set(user);
        } else if (command.includes('article')) {
            let article = command.slice(8);
            articleList.set(article, new Map());
        } else if (command.includes('posts on')) {
            const splitedCommand = command.split(`: `);
            const userAndArticle = splitedCommand[0].split(` `);
            const user = userAndArticle[0];
            const article = userAndArticle[3];

            if (usersList.has(user) && articleList.has(article)) {
                const titleAndComment = splitedCommand[1].split(`, `);
                const title = titleAndComment[0];
                const comment = titleAndComment[1];
                if (!articleList.get(article).has(user)) {
                    articleList.get(article).set(user, new Map());
                }
                articleList.get(article).get(user).set(title, comment);
            }
        }
    }

    for (const [article, comments] of articleList) {
        let commentCount = 0;

        for (const [user, userComments] of comments) {
            commentCount++;
        }
        articleListWithCounts.push({ article, comments, commentCount });
    }
    
    articleListWithCounts.sort((a, b) => b.commentCount - a.commentCount);
    
    for (const {article, comments} of articleListWithCounts) {
        console.log(`Comments on ${article}`)
        let array = [...comments].sort();

        for (const [user, userComments] of array) {

            for (const [title, comment] of userComments) {
                console.log(`--- From user ${user}: ${title} - ${comment}`);
            }
        }
    }
}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])
// Comments on Movies
// --- From user someUser: Like - I also like movies very much
// --- From user uSeR4: I also like movies - I really do
// Comments on Books
// --- From user uSeR4: I like books - I do really like them
// Comments on Shopping
// --- From user someUser: title - I go shopping every day