import styles from "./ListingFeatured.module.scss";
import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Details from "./AuthorDetails";
import moment from "moment";

export default function ListingFeatured(props) {
  return (
    <section className={styles.section}>
      <div className="container container--small md:flex">
        <div className="md:w-1/3 md:pr-6">
          <Fade>
            <figure>
              <img
                src={props.blog[0]?.bannerImage}
                alt={props.blog[0]?.title}
                width={380}
                height={318}
                layout="responsive"
              />
            </figure>
          </Fade>
        </div>
        <Fade>
          <div className={` ${styles.text} md:w-2/3 md:pl-6`}>
            <div className="tags">
              <Link href={`/tag/${props.blog[0]?.tags[0]}`}>
                <a className="tags__item">{props.blog[0]?.tags[0]}</a>
              </Link>
            </div>
            <h3>
              <Link href={`/${props.blog[0]?.slug}`}>
                <a>{props.blog[0]?.title}</a>
              </Link>
            </h3>
            <p>{props.blog[0]?.metaDescription}</p>
            <p className={styles.time}>
              <span>
                {moment(props.blog[0]?.updatedAt).format("MMMM Do, YYYY")}
              </span>
              {/* <span>5 Min Read</span> */}
            </p>

            <Details username={props.blog[0]?.primaryAuthor.username} />
          </div>
        </Fade>
      </div>
      {/* <div className="container container--small md:flex">
        <div className="md:w-1/3 md:pr-6">
          <Fade>
            <figure>
              <Image
                src="/images/temp/blog-featured.png"
                alt="Blog image"
                width={380}
                height={318}
                layout="responsive"
              />
            </figure>
          </Fade>
        </div>
        <Fade>
          <div className={` ${styles.text} md:w-2/3 md:pl-6`}>
            <div className="tags">
              <a href="" className="tags__item">
                Development
              </a>
              <a href="" className="tags__item">
                Latest Updates
              </a>
            </div>
            <h3>
              <Link href="/">
                <a>Creative Search Bar and Input Field Design Inspiration</a>
              </Link>
            </h3>
            <p>
              A successful UI design can attract new customers, increase
              customer engagement and enhance business. A well-designed search
              bar and input field will enhance user experience.Styled Search Bar
              Design with Code LinkIn the
            </p>
            <p className={styles.time}>
                <span>February 26,2021</span>
                <span>5 Min Read</span>
            </p>

            <Details />
          </div>
        </Fade>
      </div> */}
    </section>
  );
}
