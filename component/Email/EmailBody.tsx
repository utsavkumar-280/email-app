import React from "react";

import styles from "./email.module.css";
import { textFormatter, dateFormatter } from "../../utils";

const EmailBody = ({ setIsOpen }) => {
	const data = {
		id: "1",
		from: {
			email: "bounced@flipkart.com",
			name: "bounced",
		},
		date: 1582729505000,
		subject: "Lorem Ipsum",
		short_description:
			"Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa",
		body: "<div><p>Nulla at euismod erat. Donec fermentum dui ut scelerisque rhoncus. Aliquam erat volutpat. Nunc ut tortor sit amet lectus gravida dictum. Morbi eget ultricies eros, nec mollis arcu. Quisque nunc massa, gravida quis sem et, dignissim ultrices nulla. Quisque non venenatis dui, nec volutpat magna. Vivamus porttitor, arcu sed euismod faucibus, mauris lacus interdum orci, et ultrices augue leo id lorem. Ut lectus leo, finibus quis urna vitae, auctor mollis nulla. Aliquam auctor nulla tristique lectus placerat, ac commodo ex egestas. Ut venenatis, eros eu tristique maximus, libero nisi fermentum mi, at sollicitudin quam lorem in felis.</p><p>Integer lacinia, ante ut mattis tincidunt, quam augue laoreet elit, vitae consequat arcu lacus ac magna. Nunc euismod in magna eget molestie. Phasellus lacinia in sapien id ultricies. Nulla ac rhoncus nulla. Donec pellentesque tortor iaculis dolor mollis laoreet. Nunc magna orci, suscipit ut nunc fringilla, imperdiet tempus libero. Mauris sed nunc mattis urna tempor tempor vitae eget lorem. Sed pellentesque, tellus vel sagittis dignissim, ipsum erat tempor turpis, id tristique augue mi tincidunt nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ipsum quis nibh scelerisque pretium vitae ac turpis. Cras porta vestibulum lorem sit amet lacinia. Phasellus accumsan est sagittis, scelerisque ligula at, porta arcu. Vestibulum metus justo, tempus eget feugiat id, iaculis tincidunt elit.</p><p>Aliquam diam mauris, porttitor non commodo at, viverra id dui. Proin finibus a nulla id posuere. Donec ultricies cursus metus, at egestas tortor dignissim eu. Aliquam a massa eu erat gravida ultrices. Vivamus venenatis imperdiet purus, at egestas enim elementum quis. Nunc ultricies sapien sapien, gravida porttitor diam porta non. Fusce pretium sodales erat. Donec interdum ipsum odio, sit amet luctus est pharetra non. Mauris euismod neque eu malesuada scelerisque. In ultricies lectus eu libero accumsan, ultricies commodo nibh consequat. Pellentesque condimentum, neque id sollicitudin egestas, risus est lobortis diam, in faucibus sapien tortor eu felis. Cras a turpis aliquam, tristique eros at, ullamcorper tellus. Maecenas at tortor magna.</p></div>",
	};

	const date = new Date(data.date);
	const formattedDate = dateFormatter(date);
	const pfp = data.from.name[0].toUpperCase();

	const emailDescription = textFormatter(data.short_description);
	return (
		<div className={styles.emailBodyContainer}>
			<section className={styles.emailBodyContent}>
				<section className={styles.emailImgContainer}>
					<div>{pfp}</div>
				</section>

				<article className={styles.emailInfo}>
					<div className={styles.emailBodyHeadContainer}>
						<h1 className={styles.emailBodyHead}>{data.subject}</h1>
						<div className={styles.emailCtaContainer}>
							<button className={styles.emailCta}>Mark as Favorite</button>
							<button
								className={styles.emailCta}
								onClick={() => setIsOpen(false)}
							>
								Close
							</button>
						</div>
					</div>

					<p>{formattedDate}</p>
					<div
						dangerouslySetInnerHTML={{ __html: data.body }}
						className={styles.emailBodyText}
					/>
				</article>
			</section>
		</div>
	);
};

export default EmailBody;
