import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";


interface Author{
    name: string;
    role:string;
    avatarUrl:string;
}

export interface IPost{
    id:number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}
interface Content{
    type:'paragraph' | 'link',
    content: string;
}

interface PostProps{
    post: IPost;
}

export function Post({post}: PostProps) {

    const [comments, setComments] = useState(Array<string>)

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormmated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
     {locale: ptBR});

    const publishedDateRelativeToNow =formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix:true
    });

    function handleCreateNewComment(event:FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');  
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {

        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        });

        setComments(commentsWithoutDeleteOne);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Este campo é obrigatório!")
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>



                <time title={publishedDateFormmated} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {post.content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea required 
                    name="comment"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    placeholder='Deixe um comentrio'
                />

                <footer>
                    <button
                        disabled={isNewCommentEmpty}
                        type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
                
            </div>
        </article>
    )
}