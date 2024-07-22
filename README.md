# lede-project-02
This is project-01 homework for lede program.  You can find my work in this [website](https://masashiijichi.github.io/lede-project-02-website/doc/lede_project2.index.html).

# Title
What If Aliens Use ChatGPT to Study Earth?👾

<br>
-Will Earth be Misrepresented?-


# Finding 

# Summary of data collection process
1. Ask quetions to answer and ask to generate images [here](https://chatgpt.com/)


2. Embed Google Trends data about ChatGPT  from this [webseite](https://trends.google.com/trends/explore?date=now%201-d&q=ChatGPT)

# editing in process below this line

# Overview of the data analysis process
1. Access meijiyasuda website from year 1912 to year 2023
2. Create a dataframe of top 10 popular baby names by year and by gender
3. Split each name by letter
4. Find strokes and other information for these letters by kanjiAPI
5. Create another dataframe of Chinese characters found in baby names
6. Merge these two dataframes
7. Count the strokes and the readings of each name

# A section about what new skills, approaches, etc you used, or where you grew the most during the project
1. Adding API info to HTML scraping was new approach
2. Using GIF in webpage was new skill (I used following websites)
   <br>
   https://kakijun.jp/
   <br>
   https://www.writehiragana.de/katakana.html
3. Using Ezgif to edit GIF was new skill
   <br>
   https://ezgif.com/
4. Creating a website was new skill
5. Creating a github page with detailed necessary info was new skill

# A section about things you tried to do or wanted to do but did not have the skills/time (but if you have more time you might do)
1. Adding scrolly function
2. Adding interactive functions to experience the increasing complexity of Japanese names
3. Analyzing data from different angle (is there a trend for the meaning of Chinese character used in Japanese names?)
4. Interviewing experts on this area and parents who have a child
5. Revising my scraping code (I had to manually input top 10 popular names for men in 1946)
6. Last but no least, thoroughly check data and articles for errors

# About this repository

### index HTML
[index HTML](doc/lede_project.index.html) - an index html
### images files etc for the website
[doc](doc) - a folder to store necessary png files and everything (everything you need to operate the website is here)
### jupyter notebook
[code 1](JPN_baby_name.ipynb) -  a Python file to scrape data from HTML website, to access API and to analyze dataset
### data 
[main data](data/jpnbabyname0704.xlsx) - an excel file with all the data
<br>
[stroke data](data/jpbaby_gender_stroke.xlsx) - an excel file for stroke data fit for flourish format
<br>
[reading data](data/jpbaby_gender_reading.xlsx) - an excel file for reading data fit for flourish format
<br>
*all the data are stored in excel format in case encoding for various Japanese/Chinese letters don't work in csv format
