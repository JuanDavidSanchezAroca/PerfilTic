--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.17
-- Dumped by pg_dump version 9.4.17
-- Started on 2020-04-06 17:21:16 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 2115 (class 0 OID 75480)
-- Dependencies: 175
-- Data for Name: category_entity; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (1, 'Home', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/home/home.jpg', NULL);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (2, 'Clothing', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/clothing/ropa.jpg', NULL);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (3, 'Technology', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/technology/tecnologia.jpeg', NULL);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (4, 'Bathroom', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/home/Bathroom/ba%C3%B1o.jpg', 1);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (5, 'Kitchen', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/home/kitchen/cocina.jpg', 1);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (6, 'Home appliances', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/home/kitchen/home_appliances/electrodomesticos.jpg', 5);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (7, 'Tableware', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/home/kitchen/tableware/vajilla.jpg', 5);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (8, 'Men', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/clothing/men/men.jpg', 2);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (9, 'Women', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/clothing/woman/woman.jpeg', 2);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (10, 'Children', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/clothing/children/children.jpg', 2);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (11, 'Computers', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/technology/computers/computadores.jpeg', 3);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (12, 'Phones', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/technology/phones/phone.jpg', 3);
INSERT INTO public.category_entity (id, name, photo, parent_category_id) VALUES (13, 'Tablet', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/technology/tablests/tablet.jpg', 3);


--
-- TOC entry 2133 (class 0 OID 0)
-- Dependencies: 174
-- Name: category_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.category_entity_id_seq', 1, false);


--
-- TOC entry 2134 (class 0 OID 0)
-- Dependencies: 173
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.hibernate_sequence', 1, false);


--
-- TOC entry 2116 (class 0 OID 75489)
-- Dependencies: 176
-- Data for Name: product_entity; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.product_entity (product_code, description, name, priceusd, weigth, id) VALUES ('1', 'washing machine', 'washing machine', 100000, 100000, 6);
INSERT INTO public.product_entity (product_code, description, name, priceusd, weigth, id) VALUES ('2', 'Samsung', 'Samsung', 500000, 500000, 12);


--
-- TOC entry 2117 (class 0 OID 75497)
-- Dependencies: 177
-- Data for Name: product_entity_images; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.product_entity_images (product_entity_product_code, images) VALUES ('1', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/productos/lavadora1.jpeg');
INSERT INTO public.product_entity_images (product_entity_product_code, images) VALUES ('1', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/productos/lavadora2.jpg');
INSERT INTO public.product_entity_images (product_entity_product_code, images) VALUES ('1', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/productos/lavadora3.jpg');
INSERT INTO public.product_entity_images (product_entity_product_code, images) VALUES ('2', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/technology/phones/samsung_1.jpg');
INSERT INTO public.product_entity_images (product_entity_product_code, images) VALUES ('2', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/technology/phones/samsung_2.jpg');
INSERT INTO public.product_entity_images (product_entity_product_code, images) VALUES ('2', 'https://storage.cloud.google.com/software-881c9.appspot.com/perfiltic/technology/phones/samsung_3.jpg');


INSERT INTO public.users (user_name, enabled, password) VALUES ('juan', true, '123');

--
-- TOC entry 2118 (class 0 OID 75503)
-- Dependencies: 178
-- Data for Name: rol; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.rol (id_rol, name) VALUES (1, 'ADMIN');


--
-- TOC entry 2120 (class 0 OID 75510)
-- Dependencies: 180
-- Data for Name: user_rol; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.user_rol (id, id_rol, user_name) VALUES (1, 1, 'juan');


--
-- TOC entry 2135 (class 0 OID 0)
-- Dependencies: 179
-- Name: user_rol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.user_rol_id_seq', 1, false);


--
-- TOC entry 2121 (class 0 OID 75516)
-- Dependencies: 181
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: admin
--



-- Completed on 2020-04-06 17:21:16 -05

--
-- PostgreSQL database dump complete
--


