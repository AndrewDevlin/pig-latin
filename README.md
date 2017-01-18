# Pig Latin Translator

#### Web page translating to Pig Latin for Epicodus, 01.18.2017

#### By Patrick McGreevy & Andrew Devlin

## Description

This webpage takes in text and translates it into Pig Latin.

## Setup

Open `index.html` in web browser.

## Technologies Used

HTML

CSS

JavaScript

jQuery

## Specs

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
	* **Example Input**: 3
	* **Example Output**: 3
* The program adds "ay" to words beginning with a vowel.
	* **Example Input**: i
	* **Example Output**: iay
* The program moves the consonants preceding the first vowel in words to the end and adds “ay”.
	* **Example Input**: spring
	* **Example Output**: ingspray
* The program considers an initial “y” a consonant for the purposes of the above rules.
	* **Example Input**: yarn
	* **Example Output**: arnyay
* The program considers occurrences of “qu” as a single consonant for the purposes of the above rules.
	* **Example Input**: square
	* **Example Output**: aresquay

### License

Copyright (c) 2017 Patrick McGreevy & Andrew Devlin

This software is licensed under the MIT license.
