-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors

SELECT * FROM AUTHORS;

-- Get just the name and birth year of all authors

SELECT name, birth_year FROM AUTHORS;

-- Get all authors born in the 20th centruy or later

SELECT * FROM AUTHORS WHERE birth_year > 1900;

-- Get all authors born in the USA

SELECT * FROM AUTHORS WHERE nationality = 'United States of America';

-- Get all books published on 1985

SELECT * FROM BOOKS WHERE publication_date = 1985;

-- Get all books published before 1989

SELECT * FROM BOOKS WHERE publication_date < 1989;

-- Get just the title of all books.

SELECT title FROM BOOKS;

-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been

SELECT publication_date FROM BOOKS WHERE title = 'A Dance with Dragons';

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)

SELECT * FROM BOOKS WHERE title LIKE '% the %';

-- Add yourself as an author

INSERT INTO AUTHORS(name, nationality, birth_year) VALUES('Ryan Monro', 'Australia', 1981);

-- Add two books that you'd like to write (you can hard-code your id as the author id)

INSERT INTO BOOKS(title, publication_date, author_id) VALUES('How to Build a Time Machine', 2020, 9);
INSERT INTO BOOKS(title, publication_date, author_id) VALUES('Sports Almanac 2028', 2022, 9);

-- Update one of your books to have a new title

UPDATE BOOKS SET title = 'Time Travel for Dummies' WHERE id = 72;

-- Delete your books

DELETE FROM BOOKS WHERE author_id = 9;

-- Delete your author entry

DELETE FROM AUTHORS WHERE id = 9;
