all: pdf

html:
	pandoc -s resume.md -f markdown_github -c resume.css -o resume.html

pdf: html
	wkhtmltopdf resume.html resume.pdf
