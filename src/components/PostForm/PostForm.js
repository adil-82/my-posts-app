import styles from './PostForm.module.scss';

const PostForm = () => {
    return (
        <>
         <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}> Add new post </button>
        </>
    )
}

export default PostForm;