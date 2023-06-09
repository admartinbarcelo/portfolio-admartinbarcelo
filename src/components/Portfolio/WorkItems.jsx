import './data.css';

function WorkItems({ item }) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="images" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__tecnologies">
        Technologies <br /> {item.technologies}
      </p>
      <a href={item.demoLink} className="work__button" target="_blank">
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <a href={item.repoLink} className="work__button" target="_blank">
        Repository
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
}

export default WorkItems;
