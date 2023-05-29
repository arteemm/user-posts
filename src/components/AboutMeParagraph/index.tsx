import React from 'react';
import { Container, Row } from 'react-bootstrap';

const AboutMeParagraph: React.FC = () => {
  return (
    <Container className="p-3">
      <p className="h2">Обо мне</p>
      <Row>
        <p>Junior Frontend-разработчик.</p>
      </Row>
      <Row>
        <p>
          Мой основной стек: JavaScript, TypeScript, React, Redux, SCSS, Webpack… Регулярно осваиваю
          что-то новое, при решении тестовых заданий, так и ради интереса.
        </p>
      </Row>
      <Row>
        <p>
          До frontend-разработки работал в области металлообработки. Там я получил опыт командной
          работы: мы работали в команде над большими проектами, каждый проектировал свой узел, но мы
          обменивались идеями, устраивали брейн штормы для поиска лучших решений по проектам.
        </p>
      </Row>
      <Row>
        <p>
          Работать инженером было интересно, но мне всегда хотелось программировать – даже на своем
          первом месте работы я писал управляющие программы для станков. Поэтому, оценив свои
          способности, интересы и цели, я решил перейти во frontend-разработку.
        </p>
      </Row>
    </Container>
  );
};

export default AboutMeParagraph;