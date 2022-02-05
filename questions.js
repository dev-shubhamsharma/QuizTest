const questions = [
    {   
        // 1
        question: "The SaveAs dialog box can be used :",
        optionA: "for saving the file for the first time",
        optionB: "to save file by some alternative name",
        optionC: "to save file in a format other than Word",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 2
        question: "Non-impact based printing device is :",
        optionA: "Dot matrix printer",
        optionB: "Scanner",
        optionC: "Laser Printer",
        optionD: "None of the above",
        correctAnswer: "Laser Printer"
    },

    {
        // 3
        question: "To cut text from the document, press the keys :",
        optionA: "Ctrl and V",
        optionB: "Ctrl and C",
        optionC: "Ctrl and A",
        optionD: "Ctrl and X",
        correctAnswer: "Ctrl and X"
    },

    {
        // 4
        question: "__________ maps IP addresses with the domain names of the sites.",
        optionA: "URL",
        optionB: "DNS",
        optionC: "FTP",
        optionD: "None of the above",
        correctAnswer: "DNS"
    },

    {
        // 5
        question: "A Nibble consists of __________ Bits :",
        optionA: "2",
        optionB: "4",
        optionC: "8",
        optionD: "16",
        correctAnswer: "4"
    },

    {
        // 6
        question: "User interact with the operating system through a set of __________.",
        optionA: "USB Sticks",
        optionB: "Commands",
        optionC: "Scanner",
        optionD: "All of the above",
        correctAnswer: "Commands"
    },

    {
        // 7
        question: "Which is the technology used in the evaluation of aptitude test ?",
        optionA: "OCR",
        optionB: "OMR",
        optionC: "MICR",
        optionD: "MCR",
        correctAnswer: "OMR"
    },

    {
        // 8
        question: "To create a Paragraph Break in MSWORD, which key is used ?",
        optionA: "Enter",
        optionB: "Esc",
        optionC: "Tab",
        optionD: "Shift",
        correctAnswer: "Enter"
    },

    {
        // 9
        question: "MIDI means :",
        optionA: "Multimedia Instrument Digital Information",
        optionB: "Multimedia Instrument Digital Interface",
        optionC: "Musical Instrument Digital Interface",
        optionD: "Musical Information Digital Information",
        correctAnswer: "Musical Instrument Digital Interface"
    },

    {
        // 10
        question: "Full form of ASCII :",
        optionA: "American Standard Code for Information Interconnection",
        optionB: "American Situation Code for Information Intercommunication",
        optionC: "American Standard Code for Information Interchange",
        optionD: "American Standard Coding for Information Interconnection",
        correctAnswer: "American Standard Code for Information Interchange"
    },

    {
        // 11
        question: "You can add words not available in Word dictionary to :",
        optionA: "My dictionary",
        optionB: "User dictionary",
        optionC: "Custom dictionary",
        optionD: "Live dictionary",
        correctAnswer: "Custom dictionary"
    },

    {
        // 12
        question: "Portrait is used to refer to page orientation, which is :",
        optionA: "vertical",
        optionB: "horizontal",
        optionC: "flip",
        optionD: "upside down",
        correctAnswer: "vertical"
    },

    {
        // 13
        question: "'Passport Seva' website is :",
        optionA: "www.passportindia.gov.in",
        optionB: "www.passportindia.com",
        optionC: "www.passportindia.edu",
        optionD: "www.e-passportindia.gov.in",
        correctAnswer: "www.passportindia.gov.in"
    },

    {
        // 14
        question: "ORS stands for :",
        optionA: "Open Resource System",
        optionB: "Online Registration System",
        optionC: "Open Reform System",
        optionD: "Open Repair System",
        correctAnswer: "Online Registration System"
    },

    {
        // 15
        question: "UMANG is integrated with :",
        optionA: "Aadhaar and Digilocker",
        optionB: "Aadhaar or Digilocker",
        optionC: "Digilocker only",
        optionD: "Aadhaar only",
        correctAnswer: "Aadhaar and Digilocker"
    },

    {
        // 16
        question: "Which box overflows with emails generally ?",
        optionA: "Inbox",
        optionB: "Outbox",
        optionC: "AddressBox",
        optionD: "MessageBox",
        correctAnswer: "Inbox"
    },

    {
        // 17
        question: "Gmail is a software used to ",
        optionA: "Search web pages",
        optionB: "Check Emails",
        optionC: "Find hotels",
        optionD: "Search Files",
        correctAnswer: "Check Emails"
    },

    {
        // 18
        question: "What is the minimum age to join Facebook ?",
        optionA: "18 years",
        optionB: "15 years",
        optionC: "13 years",
        optionD: "10 years",
        correctAnswer: "13 years"
    },

    {
        // 19
        question: "When was Twitter launched ?",
        optionA: "01-03-2006",
        optionB: "01-04-2006",
        optionC: "01-10-2006",
        optionD: "01-12-2006",
        correctAnswer: "01-10-2006"
    },

    {
        // 20
        question: "Which option helps us to send the same letter to different persons ?",
        optionA: "Mail Merge",
        optionB: "Macros",
        optionC: "Multiple Letter",
        optionD: "Template",
        correctAnswer: "Mail Merge"
    },

    {
        // 21
        question: "Numbers in base 16 are called as",
        optionA: "Octal System",
        optionB: "Hexadecimal System",
        optionC: "Decimal System",
        optionD: "Binary System",
        correctAnswer: "Hexadecimal System"
    },

    {
        // 22
        question: "The formula in cell A2 is =B2+C3 on copying this formula in cell C2 the formula will be :",
        optionA: "=D3+E4",
        optionB: "=D2+E3",
        optionC: "=D2+E4",
        optionD: "=D3+E3",
        correctAnswer: "=D2+E3"
    },

    {
        // 23
        question: "Which of the following file extensions indicate file created in Paint ?",
        optionA: "BMP",
        optionB: "DOC",
        optionC: "STK",
        optionD: "PPT",
        correctAnswer: "BMP"
    },

    {
        // 24
        question: "Which of the following is an input device ?",
        optionA: "Screen",
        optionB: "Speaker",
        optionC: "Keyboard",
        optionD: "Printer",
        correctAnswer: "Keyboard"
    },

    {
        // 25
        question: "The cost of storing a bit is minimum in :",
        optionA: "Cache",
        optionB: "RAM",
        optionC: "Register",
        optionD: "Magnetic Disc",
        correctAnswer: "Magnetic Disc"
    },

    {
        // 26
        question: "________ is known as High level language.",
        optionA: "Windows 7",
        optionB: "Operating System",
        optionC: "Java",
        optionD: "Apple",
        correctAnswer: "Java"
    },

    {
        // 27
        question: "ROUND(1363.45, -2) returns :",
        optionA: "-1364",
        optionB: "1400",
        optionC: "1363.45",
        optionD: "1300",
        correctAnswer: "1400"
    },

    {
        // 28
        question: "Which of the following is a tool to send letter to many recipients in MS-Word ?",
        optionA: "What if",
        optionB: "Mail Merge",
        optionC: "Goal Seeking",
        optionD: "Sorting",
        correctAnswer: "Mail Merge"
    },

    {
        // 29
        question: "Airline reservation system is a typical example of :",
        optionA: "Batch processing",
        optionB: "Online processing",
        optionC: "Real time processing",
        optionD: "None of the above",
        correctAnswer: "Real time processing"
    },

    {
        // 30
        question: "To create a copy of files in the event of system failure, you  create a :",
        optionA: "restore file",
        optionB: "firewall",
        optionC: "backup",
        optionD: "redundancy",
        correctAnswer: "backup"
    },

    {
        // 31
        question: "To paste the text from the clipboard in the document being edited, press the keys :",
        optionA: "Ctrl and V",
        optionB: "Ctrl and X",
        optionC: "Ctrl and S",
        optionD: "Ctrl and P",
        correctAnswer: "Ctrl and V"
    },

    {
        // 32
        question: "Which of the following is not an output device ?",
        optionA: "Keyboard",
        optionB: "Screen",
        optionC: "Speakers",
        optionD: "Printer",
        correctAnswer: "Keyboard"
    },

    {
        // 33
        question: "Which of the following file extensions indicate Powerpoint presentation ?",
        optionA: "BMP",
        optionB: "DOC",
        optionC: "STK",
        optionD: "PPT",
        correctAnswer: "PPT"
    },

    {
        // 34
        question: "OTP stand for :",
        optionA: "One Time Password",
        optionB: "Once and Twice Password",
        optionC: "On Time Password",
        optionD: "None of the above",
        correctAnswer: "One Time Password"
    },

    {
        // 35
        question: "CC in Email stand for :",
        optionA: "Carbon catch",
        optionB: "Carbon copy",
        optionC: "Consider copy",
        optionD: "Carbon coupon",
        correctAnswer: "Carbon copy"
    },

    {
        // 36
        question: "To get help when using Office, you would click the :",
        optionA: "F1 key",
        optionB: "F3 key",
        optionC: "F2 key",
        optionD: "F4 key",
        correctAnswer: "F1 key"
    },

    {
        // 37
        question: "Size of IPv4 is :",
        optionA: "32",
        optionB: "48",
        optionC: "62",
        optionD: "128",
        correctAnswer: "32"
    },

    {
        // 38
        question: "Which of the following is a tool to send letter to many recipients in LibreOffice ?",
        optionA: "What-if",
        optionB: "Mail merge",
        optionC: "Goal seeking",
        optionD: "Sorting",
        correctAnswer: "Mail merge"
    },

    {
        // 39
        question: "Twitter is an example of :",
        optionA: "E-mail system",
        optionB: "System application",
        optionC: "Social networking",
        optionD: "Web URL",
        correctAnswer: "Social networking"
    },

    {
        // 40
        question: "Which of the following refers to the fastest, biggest and most expensive computer ?",
        optionA: "Personal computer",
        optionB: "Laptops",
        optionC: "Super Computer",
        optionD: "Notebook",
        correctAnswer: "Super Computer"
    },

    {
        // 41
        question: "Which Decimal equivalent of the binary number 11100011is:",
        optionA: "227",
        optionB: "226",
        optionC: "224",
        optionD: "228",
        correctAnswer: "227"
    },

    {
        // 42
        question: "Linux is : ",
        optionA: "A compiler",
        optionB: "An assembler",
        optionC: "An operating system",
        optionD: "An editor",
        correctAnswer: "An operating system"
    },

    {
        // 43
        question: "MIS stands for",
        optionA: "Maintenance Information System",
        optionB: "Model Information System",
        optionC: "Management Information System",
        optionD: "Media Information Source",
        correctAnswer: "Management Information System"
    },

    {
        // 44
        question: "The most commonly used web browser is :",
        optionA: "Internet Explorer",
        optionB: "Netscape",
        optionC: "Both (A) and (B)",
        optionD: "None of the above",
        correctAnswer: "Internet Explorer"
    },

    {
        // 45
        question: "Which memory is used to store BIOS on Motherboard.",
        optionA: "ROM",
        optionB: "RAM",
        optionC: "CACHE",
        optionD: "None of the above",
        correctAnswer: "ROM"
    },

    {
        // 46
        question: "SQL stands for :",
        optionA: "Standard Query Language",
        optionB: "Structured Query Language",
        optionC: "Shortest Query Language",
        optionD: "System Query Language",
        correctAnswer: "Structured Query Language"
    },

    {
        // 47
        question: "Which of the following is a communication device ?",
        optionA: "Printer",
        optionB: "Monitor",
        optionC: "Keyboard",
        optionD: "Modem",
        correctAnswer: "Modem"
    },

    {
        // 48
        question: "Using Microsoft Word's Find and Replace feature you can",
        optionA: "replace both text and formatting",
        optionB: "replace text of a document only.",
        optionC: "replace formatting only",
        optionD: "replace document's name with a new name.",
        correctAnswer: "replace both text and formatting"
    },

    {
        // 49
        question: "Numbers in base 8 are called as :",
        optionA: "Octal System",
        optionB: "Hexadecimal System",
        optionC: "Decimal System",
        optionD: "Binary Nnumbering System",
        correctAnswer: "Octal System"
    },

    {
        // 50
        question: "Convert 10100011 from binary to decimal :",
        optionA: "121",
        optionB: "163",
        optionC: "199",
        optionD: "212",
        correctAnswer: "163"
    },

    {
        // 51
        question: "Which characteristic of computer distinguishes it from electronic calculators ?",
        optionA: "Accuracy",
        optionB: "Versatility",
        optionC: "Storage",
        optionD: "Automatic",
        correctAnswer: "Storage"
    },

    {
        // 52
        question: "In Microsoft word shortcut key CTRL +W is used for :",
        optionA: "Open the Print Dialog box",
        optionB: "Update the current web page",
        optionC: "Close the current window",
        optionD: "Open the new window",
        correctAnswer: "Close the current window"
    },

    {
        // 53
        question: "What type of telecommunications hardware allows you to access the web ?",
        optionA: "Browser",
        optionB: "Modem",
        optionC: "FTP protocol",
        optionD: "IRC",
        correctAnswer: "Modem"
    },

    {
        // 54
        question: "What type of computers are client computers (most of the time) in a clientserver system ?",
        optionA: "Mainframe",
        optionB: "Mini-computer",
        optionC: "Microcomputer",
        optionD: "PDA",
        correctAnswer: "Microcomputer"
    },

    {
        // 55
        question: "Permissions of read-only file in Linux Operating System is represented as :",
        optionA: "111",
        optionB: "444",
        optionC: "777",
        optionD: "222",
        correctAnswer: "444"
    },

    {
        // 56
        question: "Which of the following is an impact printer?",
        optionA: "Laser",
        optionB: "Ink-jet",
        optionC: "Dot-matrix",
        optionD: "None of the options",
        correctAnswer: "Dot-matrix"
    },

    {
        // 57
        question: "The number of bits used to store a BCD digit is :",
        optionA: "2",
        optionB: "4",
        optionC: "6",
        optionD: "8",
        correctAnswer: "4"
    },

    {
        // 58
        question: "A collection of worksheets is called as :",
        optionA: "Excel Sheets",
        optionB: "Workbook",
        optionC: "Excel Worksheets",
        optionD: "Excel Book",
        correctAnswer: "Workbook"
    },

    {
        // 59
        question: "The binary number 1110 is equal to the decimal number ________",
        optionA: "3",
        optionB: "1",
        optionC: "7",
        optionD: "14",
        correctAnswer: "14"
    },

    {
        // 60
        question: "Which of the following is used to create newspaper style columns ?",
        optionA: "Format tabs",
        optionB: "Table insert table",
        optionC: "Insert Textbox",
        optionD: "Format columns",
        correctAnswer: "Format columns"
    },

    {
        // 61
        question: "Which is incorrect statement for MS-Word ?",
        optionA: "It can be used to prepare annual report.",
        optionB: "It can be used to generate same document to send multiple persons",
        optionC: "It has autocorrect facility and dictionary facility.",
        optionD: "It can create a graph from given data",
        correctAnswer: "It can be used to prepare annual report."
    },

    {
        // 62
        question: "Which is the character encoding standard that provides unique number to every character ?",
        optionA: "Unicode",
        optionB: "ASCII",
        optionC: "ENIAC",
        optionD: "IBM",
        correctAnswer: "Unicode"
    },

    {
        // 63
        question: "Which one is the invalid size of Cache memory ?",
        optionA: "2048 Kilobytes",
        optionB: "3072 Kilobytes",
        optionC: "92162 Kilobytes",
        optionD: "512 Kilobytes",
        correctAnswer: "92162 Kilobytes"
    },

    {
        // 64
        question: "Which short-cut key is used to open a new file in MS-Word?",
        optionA: "Ctrl + W",
        optionB: "Alt + N",
        optionC: "Ctrl + N",
        optionD: "Ctrl + F",
        correctAnswer: "Ctrl + N"
    },

    {
        // 65
        question: "Which is the correct Hexa-decimal representation of binary 1010110110011?",
        optionA: "12663",
        optionB: "15B3",
        optionC: "3B51",
        optionD: "5555",
        correctAnswer: "15B3"
    },

    {
        // 66
        question: "MBR is an acronym for",
        optionA: "Most Boot Report",
        optionB: "Master Byte Record",
        optionC: "Master Boot Record",
        optionD: "Most Burn Record",
        correctAnswer: "Master Boot Record"
    },

    {
        // 67
        question: "Which tasks are performed by operating system in a computer (i) Memory management (ii) Process management (iii) Device management (iv) File management",
        optionA: "(i),(ii),(iii),(iv)",
        optionB: "(i),(ii),(iv)",
        optionC: "(ii),(iii)",
        optionD: "(i),(iii)",
        correctAnswer: "(i),(ii),(iii),(iv)"
    },

    {
        // 68
        question: "To perform addition of all the cells from B8 to B11, which is the correct option ?",
        optionA: "=ADD(B8:B11)",
        optionB: "=(B8+B11)",
        optionC: "=SUM(B8+B11)",
        optionD: "=SUM(B8:B11)",
        correctAnswer: "=SUM(B8:B11)"
    },

    {
        // 69
        question: "Which one is not a type of memory ?",
        optionA: "ROM",
        optionB: "Cache",
        optionC: "EEPROM",
        optionD: "Joy-stick",
        correctAnswer: "Joy-stick"
    },

    {
        // 70
        question: "Binary equivalent of decimal 53.625 is",
        optionA: "110101.101",
        optionB: "111101.001",
        optionC: "110111.100",
        optionD: "100101.101",
        correctAnswer: "110101.101"
    },

    {
        // 71
        question: "FAT stands for",
        optionA: "File Allocation Table",
        optionB: "Folder Allocation Table ",
        optionC: "Folder Allocation Transition",
        optionD: "File Allocation Transition",
        correctAnswer: "File Allocation Table"
    },

    {
        // 72
        question: "operation of file or folder is required to move location of file or folder.",
        optionA: "Copy followed by Paste",
        optionB: "Cut followed by Paste",
        optionC: "Move followed by Paste",
        optionD: "Change location",
        correctAnswer: "Cut followed by Paste"
    },

    {
        // 73
        question: "To get Help when using Office, you would click the :",
        optionA: "F1 key",
        optionB: "F2 key",
        optionC: "F3 key",
        optionD: "F4 key",
        correctAnswer: "F1 key"
    },

    {
        // 74
        question: "Operating System can be installed from following resources",
        optionA: "Disk",
        optionB: "Network",
        optionC: "Remote Installation",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 75
        question: "Device, which is required for the Internet connection. ",
        optionA: "Joystick",
        optionB: "CD Drive",
        optionC: "Mouse",
        optionD: "NIC Card",
        correctAnswer: "NIC Card"
    },

    {
        // 76
        question: "Size of Floppy disks is :",
        optionA: "5.25 inch",
        optionB: "2.25 inch",
        optionC: "7.25 inch",
        optionD: "All of the above",
        correctAnswer: "5.25 inch"
    },

    {
        // 77
        question: "To change the cell reference B4:B9 to an absolute cell reference, you would enter it as",
        optionA: "B4:B9",
        optionB: "B$4:B$9",
        optionC: "$B$4:$B$9",
        optionD: "$B4:$B9",
        correctAnswer: "$B$4:$B$9"
    },

    {
        // 78
        question: "____________is a known as high level language.",
        optionA: "Windows 7",
        optionB: "Linux",
        optionC: "Microsoft .NET",
        optionD: "Apple",
        correctAnswer: "Microsoft .NET"
    },

    {
        // 79
        question: "Which output device is used for translating information from a computer into pictorial form on paper?",
        optionA: "Mouse",
        optionB: "Plotter",
        optionC: "Touch panel",
        optionD: "Card Punch",
        correctAnswer: "Plotter"
    },

    {
        // 80
        question: "Which software is used to teach students with help of LCD Projector ?",
        optionA: "Spreadsheet",
        optionB: "Database",
        optionC: "Word processing",
        optionD: "PowerPoint",
        correctAnswer: "PowerPoint"
    },

    {
        // 81
        question: "An optical input device that interprets pencil marks on paper media is",
        optionA: "OMR",
        optionB: "Punch card reader",
        optionC: "optical scanners",
        optionD: "Magnetic tape",
        correctAnswer: "OMR"
    },

    {
        // 82
        question: "Numbers in base 2 are called as :",
        optionA: "Octal System",
        optionB: "Hexadecimal System",
        optionC: "Decimal System",
        optionD: "Binary Numbering System",
        correctAnswer: "Binary Numbering System"
    },

    {
        // 83
        question: "In a single byte how many bits will be there?",
        optionA: "8",
        optionB: "16",
        optionC: "4",
        optionD: "32",
        correctAnswer: "8"
    },

    {
        // 84
        question: "USB is",
        optionA: "Unique Serial Bus",
        optionB: "Universal Serial Bus",
        optionC: "Union Serial Bus",
        optionD: "Unknown Serial Bus",
        correctAnswer: "Universal Serial Bus"
    },

    {
        // 85
        question: "A keyboard is this kind of device :",
        optionA: "Black",
        optionB: "Input",
        optionC: "Output",
        optionD: "Word processing",
        correctAnswer: "Input"
    },

    {
        // 86
        question: "The three main components of a digital computer system are:",
        optionA: "Memory, Input/Output, DMA",
        optionB: "ALU, CPU, Memory",
        optionC: "Memory, Input/Output, CPU",
        optionD: "Control Circuits, ALU, Registers",
        correctAnswer: "Memory, Input/Output, CPU"
    },

    {
        // 87
        question: "Which one of the following is volatile ?",
        optionA: "Bubble memory",
        optionB: "RAM",
        optionC: "ROM",
        optionD: "Magnetic Disc",
        correctAnswer: "RAM"
    },

    {
        // 88
        question: "The resolution of a dot matrix printer is measured in:",
        optionA: "Megabits",
        optionB: "Dots per inch",
        optionC: "Hertz",
        optionD: "Inches",
        correctAnswer: "Dots per inch"
    },

    {
        // 89
        question: "Linux open source is an",
        optionA: "Operating System",
        optionB: "Office tool",
        optionC: "Programming Standard",
        optionD: "Proprietary Operating System",
        correctAnswer: "Operating System"
    },

    {
        // 90
        question: "The term DBMS stands for :",
        optionA: "Digital Bar Management Software",
        optionB: "Data Base Management System",
        optionC: "Domain Based Management Software",
        optionD: "Data Base Management Software",
        correctAnswer: "Data Base Management System"
    },

    {
        // 91
        question: "The basic architecture of computer was developed by",
        optionA: "John Von Neumann",
        optionB: "Charles Babbage",
        optionC: "Blaise Pascal",
        optionD: "Gorden Moore",
        correctAnswer: "John Von Neumann"
    },

    {
        // 92
        question: "Which protocol provides e-mail facility among different hosts?",
        optionA: "FTP",
        optionB: "SMTP",
        optionC: "TELNET",
        optionD: "SNMP",
        correctAnswer: "SMTP"
    },

    {
        // 93
        question: "Primary Memory is",
        optionA: "RAM",
        optionB: "ROM",
        optionC: "USB Drive",
        optionD: "Floppy Disk",
        correctAnswer: "RAM"
    },

    {
        // 94
        question: "Which of the following is not a font style?",
        optionA: "Bold",
        optionB: "Italics",
        optionC: "Regular",
        optionD: "Strikethrough",
        correctAnswer: "Regular"
    },

    {
        // 95
        question: "Which of the following translates a program written in Assembly language into Machine Code?",
        optionA: "A compiler",
        optionB: "An assembler",
        optionC: "An operating system",
        optionD: "An editor",
        correctAnswer: "An assembler"
    },

    {
        // 96
        question: "Mail Merge is:",
        optionA: "production of document from a single template and a data source",
        optionB: "production of single documents from a single template and a Clip art",
        optionC: "production of multiple documents from a single file and an address",
        optionD: "production of multiple documents from a single template and a data source",
        correctAnswer: "production of multiple documents from a single template and a data source"
    },

    {
        // 97
        question: "GIF and JPEG files are examples of?",
        optionA: "Microsoft Word files",
        optionB: "Images",
        optionC: "Audio files",
        optionD: "Video files",
        correctAnswer: "Images"
    },

    {
        // 98
        question: "The main circuit board in a computer is called a :",
        optionA: "RAM",
        optionB: "CPU",
        optionC: "Motherboard",
        optionD: "All of the above",
        correctAnswer: "Motherboard"
    },

    {
        // 99
        question: "The World Wide Web was devised by :",
        optionA: "CERN",
        optionB: "ECRN",
        optionC: "CARN",
        optionD: "NETW",
        correctAnswer: "CERN"
    },

    {
        // 100
        question: "What is the best way to create a uniform background image to all slides?",
        optionA: "By inserting image on all slides",
        optionB: "Define background image into Slide Master",
        optionC: "Insert image on First Slide",
        optionD: "By copying image to all slide",
        correctAnswer: "Define background image into Slide Master"
    },
// 
// *************************************************
//
    {
        // 101
        question: "Which of the following statements is correct ?",
        optionA: "1 KB = 1024 bytes",
        optionB: "1 MB = 2048 bytes",
        optionC: "1 MB = 1000 kilobytes",
        optionD: "1 KB = 1000 bytes",
        correctAnswer: "1 KB = 1024 bytes"
    },

    {
        // 102
        question: "A collection of hyperlinked documents on the internet forms the ?",
        optionA: "WWW",
        optionB: "Email System",
        optionC: "Mailing list",
        optionD: "Hypertext Markup Language",
        correctAnswer: "WWW"
    },

    {
        // 103
        question: "The location of a resource on the internet is given by its?",
        optionA: "Protocol",
        optionB: "URL",
        optionC: "E-mail address",
        optionD: "ICQ",
        correctAnswer: "URL"
    },

    {
        // 104
        question: "The term HTTP stands for?",
        optionA: "Hyper terminal tracing program",
        optionB: "Hypertext tracing protocol",
        optionC: "Hypertext transfer program",
        optionD: "Hypertext transfer protocol",
        correctAnswer: "Hypertext transfer protocol"
    },

    {
        // 105
        question: "Which software prevents the external access to a system?",
        optionA: "Firewall",
        optionB: "Gateway",
        optionC: "Router",
        optionD: "Virus checker",
        correctAnswer: "Firewall"
    },

    {
        // 106
        question: "Which one of the following is a valid email address?",
        optionA: "oipl@gonda.com",
        optionB: "oiplgonda.com",
        optionC: "oiplgonda@.com",
        optionD: "oipl@gonda",
        correctAnswer: "oipl@gonda.com"
    },

    {
        // 107
        question: " Which of the following best describes uploading information?",
        optionA: "Sorting data on a disk drive",
        optionB: "Sending information to a host computer",
        optionC: "Receiving information from a host computer",
        optionD: "Sorting data on a hard drive",
        correctAnswer: "Sending information to a host computer"
    },

    {
        // 108
        question: "Which one of the following is the most common internet protocol?",
        optionA: "HTML",
        optionB: "NetBEUI",
        optionC: "TCP/IP",
        optionD: "IPX/SPX",
        correctAnswer: "TCP/IP"
    },

    {
        // 109
        question: "The term FTP stands for?",
        optionA: "File transfer program",
        optionB: "File transmission protocol",
        optionC: "File transfer protocol",
        optionD: "File transfer protection",
        correctAnswer: "File transfer protocol"
    },

    {
        // 110
        question: "Which one of the following is not a network topology?",
        optionA: "Star",
        optionB: "Ring",
        optionC: "Bus",
        optionD: "Peer to Peer",
        correctAnswer: "Peer to Peer"
    },

    {
        // 111
        question: "When the mail server sends mail to other mail servers it becomes ___ ?",
        optionA: "SMTP client",
        optionB: "SMTP server",
        optionC: "Peer",
        optionD: "Master",
        correctAnswer: "SMTP client"
    },

    {
        // 112
        question: "The length of an IPv6 address is?",
        optionA: "32 bits",
        optionB: "64 bits",
        optionC: "128 bits",
        optionD: "256 bits",
        correctAnswer: "128 bits"
    },

    {
        // 113
        question: "Which of the following address belongs class A?",
        optionA: "121.12.12.248",
        optionB: "130.12.12.248",
        optionC: "128.12.12.248",
        optionD: "129.12.12.248",
        correctAnswer: "121.12.12.248"
    },

    {
        // 114
        question: "Which of the following is correct IPv4 address?",
        optionA: "124.201.3.1.52",
        optionB: "01.200.128.123",
        optionC: "300.142.210.64",
        optionD: "128.64.0.0",
        correctAnswer: "128.64.0.0"
    },

    {
        // 115
        question: "The term WAN stands for?",
        optionA: "Wide Area Net",
        optionB: "Wide Access Network",
        optionC: "Wide Area Network",
        optionD: "Wide Access Net",
        correctAnswer: "Wide Area Network"
    },

    {
        // 116
        question: "What IP address class allocates 8 bits for the host identification part?",
        optionA: "Class A",
        optionB: "Class B",
        optionC: "Class C",
        optionD: "Class D",
        correctAnswer: "Class C"
    },

    {
        // 117
        question: "How many versions available of IP?",
        optionA: "6 version",
        optionB: "4 version",
        optionC: "2 version",
        optionD: "1 version",
        correctAnswer: "2 version"
    },

    {
        // 118
        question: "In specific, if the systems use separate protocols, which one of the following devices is used to link two systems?",
        optionA: "Repeater",
        optionB: "Gateway",
        optionC: "Bridge",
        optionD: "Hub",
        correctAnswer: "Gateway"
    },

    {
        // 119
        question: "What is an operating system?",
        optionA: "interface between the hardware and application programs",
        optionB: "collection of programs that manages hardware resources",
        optionC: "system service provider to the application programs",
        optionD: "all of the mentioned",
        correctAnswer: "all of the mentioned"
    },

    {
        // 120
        question: "Which of the following is not an operating system",
        optionA: "Windows",
        optionB: "Linux",
        optionC: "Oracle",
        optionD: "DOS",
        correctAnswer: "Oracle"
    },

    {
        // 121
        question: "When were MS windows operating systems proposed?",
        optionA: "1994",
        optionB: "1990",
        optionC: "1992",
        optionD: "1985",
        correctAnswer: "1985"
    },

    {
        // 122
        question: " Which of the following is the extension of Notepad?",
        optionA: ".txt",
        optionB: ".xls",
        optionC: ".ppt",
        optionD: ".bmp",
        correctAnswer: ".txt"
    },

    {
        // 123
        question: " What else is a command interpreter called :",
        optionA: "prompt",
        optionB: "kernel",
        optionC: "shell",
        optionD: "command",
        correctAnswer: "shell"
    },

    {
        // 124
        question: "When you delete a file in your computer, where does it go?",
        optionA: "Recycle bin",
        optionB: "Hard disk",
        optionC: "Taskbar",
        optionD: "None of these",
        correctAnswer: "Recycle bin"
    },

    {
        // 125
        question: "Which is the Linux operating system",
        optionA: "Private operating system",
        optionB: "Windows operating system",
        optionC: "Open-source operating system",
        optionD: "None of these",
        correctAnswer: "Open-source operating system"
    },

    {
        // 126
        question: "Which of the following is a single-user operating system?",
        optionA: "Windows",
        optionB: "MAC",
        optionC: "Ms-Dos",
        optionD: "None of these",
        correctAnswer: "Ms-Dos"
    },

    {
        // 127
        question: "Which of the following is not application software?",
        optionA: "Windows 7",
        optionB: "WordPad",
        optionC: "Photoshop",
        optionD: "MS-excel",
        correctAnswer: "Windows 7"
    },

    {
        // 128
        question: "Which of the following operating systems does not support more than one program at a time?",
        optionA: "Linux",
        optionB: "Windows",
        optionC: "MAC",
        optionD: "DOS",
        correctAnswer: "DOS"
    },

    {
        // 129
        question: "Which of the following is system software?",
        optionA: "Operating system",
        optionB: "Compiler",
        optionC: "Utilities",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 130
        question: "The operating system work between",
        optionA: "User and Computer",
        optionB: "Network and User",
        optionC: "One user to another user",
        optionD: "All of the these",
        correctAnswer: "User and Computer"
    },

    {
        // 131
        question: "Which of the following programs is loaded first into memory, when starting a computer?",
        optionA: "Window desktop",
        optionB: "Network connection program",
        optionC: "Operating system",
        optionD: "CMD",
        correctAnswer: "Operating system"
    },

    {
        // 132
        question: "What is full the name of KYC",
        optionA: "Know your customer",
        optionB: "Know your cash",
        optionC: "Knowledge of your customer",
        optionD: "None of these",
        correctAnswer: "Know your customer"
    },

    {
        // 133
        question: "Helps in faster disposal of large number of checks in banking sector?",
        optionA: "OMR",
        optionB: "OCR",
        optionC: "Bar Code Reader",
        optionD: "MICR",
        correctAnswer: "MICR"
    },

    {
        // 134
        question: "Full name of MMID",
        optionA: "Mobile Money Identify",
        optionB: "Mobile Money Identifier",
        optionC: "Both",
        optionD: "None",
        correctAnswer: "Mobile Money Identifier"
    },

    {
        // 135
        question: "How many digits are there in the printed number on the ATM debit card?",
        optionA: "12",
        optionB: "14",
        optionC: "16",
        optionD: "10",
        correctAnswer: "16"
    },

    {
        // 136
        question: "What does 'T' mean in RTGS",
        optionA: "Tea",
        optionB: "Time",
        optionC: "Today",
        optionD: "Transfer",
        correctAnswer: "Time"
    },

    {
        // 137
        question: "Full form of IMEI ?",
        optionA: "Internet Mobile Equipment Identity",
        optionB: "International Mobile Electronic Identity",
        optionC: "International Mobile Equipment Identity",
        optionD: "None",
        correctAnswer: "International Mobile Equipment Identity"
    },

    {
        // 138
        question: "Full name of UIDAI",
        optionA: "University Identification Authority of India",
        optionB: "Unique Identification Authority of India",
        optionC: "Unique Information Authority of India",
        optionD: "None",
        correctAnswer: "Unique Identification Authority of India"
    },

    {
        // 139
        question: "Full name of BHIM ?",
        optionA: "Bharat Information Money",
        optionB: "Bharatiya Interface for Mobile",
        optionC: "Bharat Interface for Money",
        optionD: "Bharatiya Interface for Money",
        correctAnswer: "Bharat Interface for Money"
    },

    {
        // 140
        question: "What is the full name of PAN ?",
        optionA: "A kind of Account",
        optionB: "Position Account Number",
        optionC: "Permanent Account Number",
        optionD: "Primary Account Number",
        correctAnswer: "Permanent Account Number"
    },

    // ********************** NETWOTKING QUESTIONS ***********************//

    {
        // 141
        question: "This is a networking device that passes data between networks having similar functions but dissimilar implementations.",
        optionA: "Hub",
        optionB: "Modem",
        optionC: "Gateway",
        optionD: "Repeater",
        correctAnswer: "Gateway"
    },

    {
        // 142
        question: "DNS translates __________.",
        optionA: "domain name into IP",
        optionB: "IP into domain name",
        optionC: "domain name into physical address",
        optionD: "both (A) and (B)",
        correctAnswer: "domain name into IP"
    },

    {
        // 143
        question: "In order to connect to ISP's server you need ",
        optionA: "Hand gloves",
        optionB: "Printer",
        optionC: "User name and Password",
        optionD: "None of the above",
        correctAnswer: "User name and Password"
    },

    {
        // 144
        question: "In order to upload a HTML file to a web server, you use __________.",
        optionA: "HTTP",
        optionB: "SMTP",
        optionC: "SIP",
        optionD: "FTP",
        correctAnswer: "FTP"
    },

    {
        // 145
        question: "Once the e-mail is sent, the message is broken into pieces called __________.",
        optionA: "Packets",
        optionB: "Process",
        optionC: "Digits",
        optionD: "Bytes",
        correctAnswer: "Packets"
    },

    {
        // 146
        question: "__________ is a web's native protocol",
        optionA: "SLIP",
        optionB: "TCP/IP",
        optionC: "HTTP",
        optionD: "PPP",
        correctAnswer: "HTTP"
    },

    {
        // 147
        question: "It is a uniform naming scheme for locating resources on the web.",
        optionA: "URI",
        optionB: "HTTP",
        optionC: "WEBNAME",
        optionD: "RESOURCENAME",
        correctAnswer: "URI"
    },

    {
        // 148
        question: "Which of the following is best suitable for remote administration of a computer ?",
        optionA: "Telnet",
        optionB: "WAIS",
        optionC: "Brosers",
        optionD: "HTML",
        correctAnswer: "Telnet"
    },

    {
        // 149
        question: "Spider is a -",
        optionA: "a program that crawls around the web and stores pages in search engines",
        optionB: "hacking software that spreads virally",
        optionC: "software that examines network vulnerabilities",
        optionD: "a protocol for distributing large files",
        correctAnswer: "a program that crawls around the web and stores pages in search engines"
    },

    {
        // 150
        question: "Web pages are uniquely defined using :",
        optionA: "IP Address",
        optionB: "URL",
        optionC: "Domain",
        optionD: "File name",
        correctAnswer: "URL"
    },

    {
        // 151
        question: "The ownership rights as related to content on the web are governed under",
        optionA: "Copyright law",
        optionB: "Patent law",
        optionC: "Data protection law",
        optionD: "Privacy law",
        correctAnswer: "Copyright law"
    },

    {
        // 152
        question: "A modem is not needed when accessing the internet through :",
        optionA: "Wi-Fi",
        optionB: "LAN",
        optionC: "Cable",
        optionD: "None of the above",
        correctAnswer: "LAN"
    },

    {
        // 153
        question: "A software that prevents external access to a system is termed as :",
        optionA: "Gateway",
        optionB: "Firewall",
        optionC: "Intrusion Prevention System",
        optionD: "Anti-virus",
        correctAnswer: "Firewall"
    },

    {
        // 154
        question: "On internet, which version of the Internet Protocol is the most widely used",
        optionA: "IPv1",
        optionB: "IPv6",
        optionC: "IPv2",
        optionD: "IPv4",
        correctAnswer: "IPv4"
    },

    {
        // 155
        question: "Which is the first Internet search engine?",
        optionA: "Google",
        optionB: "Archie",
        optionC: "Altavista",
        optionD: "WAIS",
        correctAnswer: "Archie"
    },

    {
        // 156
        question: "Who is making the Web standards?",
        optionA: "Mozilla",
        optionB: "Microsoft",
        optionC: "The World Wide Web Consortium(W3C)",
        optionD: "NVDIA",
        correctAnswer: "The World Wide Web Consortium(W3C)"
    },

    {
        // 157
        question: "Data communication system spanning states, countries, or the whole world is",
        optionA: "LAN",
        optionB: "WAN",
        optionC: "MAN",
        optionD: "None of the above",
        correctAnswer: "WAN"
    },

    {
        // 158
        question: "Expand WAN",
        optionA: "World area network",
        optionB: "Wide area network",
        optionC: "Web area network",
        optionD: "None of the above",
        correctAnswer: "Wide area network"
    },

    {
        // 159
        question: "The facilities available in the internet are : (i) electronic mail, (ii) remote login, (iii) file transfer, (iv) word processing",
        optionA: "(i), (ii)",
        optionB: "(i), (ii) and (iv)",
        optionC: "(i), (ii) and (iii)",
        optionD: "(ii), (iii) and (iv)",
        correctAnswer: "(i), (ii) and (iii)"
    },

    {
        // 160
        question: "Which of the following services use TCP ? (i) DHCP, (ii) SMTP, (iii) HTTP, (iv) TFTP, (v) FTP",
        optionA: "(i) and (ii)",
        optionB: "(i), (ii) and (iv)",
        optionC: "(i), (iii) and (iv)",
        optionD: "(ii), (iii) and (v)",
        correctAnswer: "(ii), (iii) and (v)"
    },

    {
        // 161
        question: "A firewall may be implemented in :",
        optionA: "bridges used in an intranet",
        optionB: "routers which connect intranet to internet",
        optionC: "expensive modem",
        optionD: "user application programs",
        correctAnswer: "routers which connect intranet to internet"
    },

    {
        // 162
        question: "Mail access starts with client when user needs to download e-mail from the :",
        optionA: "Mail Host",
        optionB: "Mail Server",
        optionC: "Mail Box",
        optionD: "Internet",
        correctAnswer: "Mail Box"
    },

    {
        // 163
        question: "For carrying out C2C e - Commerce the following infrastructure is essential : (i) World wide web, (ii) corporate network, (iii) Electronic data interchange standards, (iv) Secure payment services, (v) Secure electronic communication link connecting businesses",
        optionA: "(i) and (ii)",
        optionB: "(ii) and (iv)",
        optionC: "(i) and (iii)",
        optionD: "(i) and (iv)",
        correctAnswer: "(i) and (iii)"
    },

    {
        // 164
        question: "Which of the following is considered as first web browser ?",
        optionA: "Nexus",
        optionB: "Netscape Navigator",
        optionC: "Internet Explorer",
        optionD: "Mosaic",
        correctAnswer: "Nexus"
    },

    {
        // 165
        question: "ARPANET stands for",
        optionA: "Advanced Research Projects Agency Network",
        optionB: "Advance Research Project Agency Network",
        optionC: "Asymmetric Routing Project Advance Network",
        optionD: "None of the options",
        correctAnswer: "Advanced Research Projects Agency Network"
    },

    {
        // 166
        question: "Which of this is not a class of IP address?",
        optionA: "Class E",
        optionB: "Class C",
        optionC: "Class D",
        optionD: "Class G",
        correctAnswer: "Class G"
    },
    
    {
        // 167
        question: "Search Engines are able to search ________ type of information?",
        optionA: "Documents",
        optionB: "Audio",
        optionC: "Video",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 168
        question: "Which of the following protocol is used by remote login?",
        optionA: "telnet",
        optionB: "ftp",
        optionC: "smtp",
        optionD: "ntp",
        correctAnswer: "telnet"
    },

    {
        // 169
        question: "Which of the following is a search engine?",
        optionA: "Twitter",
        optionB: "Facebook",
        optionC: "myspace",
        optionD: "Google",
        correctAnswer: "Google"
    },

    {
        // 170
        question: "Raj can receive his e-mail, but he cannot send e-mail. Which of the following is most likely causing his problem?",
        optionA: "POP3",
        optionB: "SMTP",
        optionC: "IMAP",
        optionD: "UART",
        correctAnswer: "SMTP"
    },

    {
        // 171
        question: "The 4 byte IP address consists of",
        optionA: "Network Address",
        optionB: "Host Address",
        optionC: "Both Network and Host address",
        optionD: "None of the above",
        correctAnswer: "Both Network and Host address"
    },

    {
        // 172
        question: "In this topology there is a central controller or hub :",
        optionA: "Star",
        optionB: "Mesh",
        optionC: "Ring",
        optionD: "Bus",
        correctAnswer: "Star"
    },

    {
        // 173
        question: "A computer communication technology that provides a way to interconnect multiple computers across short distance is",
        optionA: "LAN",
        optionB: "WAN",
        optionC: "MAN",
        optionD: "None of the above",
        correctAnswer: "LAN"
    },

    {
        // 174
        question: "The system that translates an IP address into an easier to remember name is the",
        optionA: "Packet switching",
        optionB: "DNS",
        optionC: "Domain numbering system",
        optionD: "None of the above",
        correctAnswer: "DNS"
    },

    {
        // 175
        question: "In an email address abc@dsdu.com, dsdu is :",
        optionA: "host computer in a business with the name dsdu",
        optionB: "host computer in a commercial domain",
        optionC: "client computer in a commercial business",
        optionD: "client computer in a commercial domain",
        correctAnswer: "host computer in a commercial domain"
    },

    {
        // 176
        question: "The way in which information is transmitted to multiple internet connected devices is called",
        optionA: "Internet connectivity",
        optionB: "IP address",
        optionC: "multicasting",
        optionD: "multitasking",
        correctAnswer: "multicasting"
    },

    {
        // 177
        question: "Which class of IP address has the most host addresses available by default?",
        optionA: "A",
        optionB: "B",
        optionC: "C",
        optionD: "None of the above",
        correctAnswer: "A"
    },

    {
        // 178
        question: "FTP is",
        optionA: "Server side encryption protocol",
        optionB: "Control connection to remote computer to transfer files",
        optionC: "User Datagram Protocol.",
        optionD: "Authorization of a user through login and password verification.",
        correctAnswer: "Control connection to remote computer to transfer files"
    },

    {
        // 179
        question: "To join on the Internet, the computer has to be connected through the",
        optionA: "Internet architecture board",
        optionB: "Internet society",
        optionC: "Internet service provider",
        optionD: "none of the mentioned",
        correctAnswer: "Internet service provider"
    },

    {
        // 180
        question: "Which protocol assigns IP address to the client connected in the Internet?",
        optionA: "DHCP",
        optionB: "IP",
        optionC: "TCP",
        optionD: "Telnet",
        correctAnswer: "DHCP"
    },

    {
        // 181
        question: "Protocols are",
        optionA: "Agreements on how communication components and DTE's are to communicate",
        optionB: "Logical communication channels for transferring data ",
        optionC: "Physical communication channels sued for transferring data",
        optionD: "None of the above",
        correctAnswer: "Agreements on how communication components and DTE's are to communicate"
    },

    {
        // 182
        question: "The topology with highest reliability is?",
        optionA: "Bus topology",
        optionB: "Star topology",
        optionC: "Ring Topology ",
        optionD: "Mesh Topology",
        correctAnswer: "Mesh Topology"
    },

    {
        // 183
        question: "HTML is",
        optionA: "Hyper Text Markedup Language",
        optionB: "Hyper Text Markup Language",
        optionC: "Hyper Text Marked Language",
        optionD: "Hyper Text Marking Language",
        correctAnswer: "Hyper Text Markup Language"
    },

    {
        // 184
        question: "Which is the type of page orientation in LibreOffice writer?",
        optionA: "Portrait",
        optionB: "Landscape",
        optionC: "Slide",
        optionD: "Both Portrait & Landscape",
        correctAnswer: "Both Portrait & Landscape"
    },

    {
        // 185
        question: "Which functiion key is used for spell check :",
        optionA: "F7",
        optionB: "Ctrl + C",
        optionC: "F8",
        optionD: "Ctrl + F7",
        correctAnswer: "F7"
    },

    {
        // 186
        question: "Shortcut key for manage template in LibreOffice writer",
        optionA: "Ctrl + V",
        optionB: "Ctrl + Shift + N",
        optionC: "Ctrl + Shift + O",
        optionD: "None of the above",
        correctAnswer: "Ctrl + Shift + N"
    },

    {
        // 187
        question: "Which key is used to go to beginning of the line in LibreOffie writer",
        optionA: "Ctrl + Home",
        optionB: "Home",
        optionC: "Alt + Home",
        optionD: "Shift + Home",
        correctAnswer: "Home"
    },

    {
        // 188
        question: "Which of the following is not a component of the LibreOffice suite",
        optionA: "Writer",
        optionB: "Impress",
        optionC: "Base",
        optionD: "Internet Explorer",
        correctAnswer: "Internet Explorer"
    },

    {
        // 189
        question: "What is minimum font size in LibreOffice writer :",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "4",
        correctAnswer: "2"
    },

    {
        // 190
        question: "What is the default file extension in LibreOffice Writer?",
        optionA: ".doc",
        optionB: ".docx",
        optionC: ".odt",
        optionD: "None of the above",
        correctAnswer: ".odt"
    },

    {
        // 191
        question: "What is maximum font size in LibreOffice Writer?",
        optionA: "999.9",
        optionB: "80",
        optionC: "100",
        optionD: "200",
        correctAnswer: "999.9"
    },

    {
        // 192
        question: "What is maximum zoom percentage in LibreOffice Writer?",
        optionA: "100%",
        optionB: "500%",
        optionC: "600%",
        optionD: "1000%",
        correctAnswer: "600%"
    },

    {
        // 193
        question: "Shortcut for insert table in LibreOffice writer",
        optionA: "Ctrl + F7",
        optionB: "Ctrl + F12",
        optionC: "Ctrl + F8",
        optionD: "Ctrl + F9",
        correctAnswer: "Ctrl + F12"
    },

    {
        // 194
        question: "Print Preview Shortcut in LibreOffice writer",
        optionA: "Ctrl + Shift + O",
        optionB: "Ctrl + Shift + P",
        optionC: "Ctrl + Shift + S",
        optionD: "Ctrl + Shift + U",
        correctAnswer: "Ctrl + Shift + O"
    },

    {
        // 195
        question: "Footnote is located at __________ in LibreOffice writer",
        optionA: "Header of page",
        optionB: "Middle of page",
        optionC: "Bottom of page",
        optionD: "None of the above",
        correctAnswer: "Bottom of page"
    },

    {
        // 196
        question: "What is the default file name in LibreOffice writer",
        optionA: "New file",
        optionB: "Odt file",
        optionC: "Untitled 1",
        optionD: "None of the above",
        correctAnswer: "Untitled 1"
    },

    {
        // 197
        question: "Which sign is mandatory before any formaula",
        optionA: "+",
        optionB: "-",
        optionC: "=",
        optionD: "*",
        correctAnswer: "="
    },

    {
        // 198
        question: "Header and footer is available in which of the following menus",
        optionA: "File",
        optionB: "Insert",
        optionC: "View",
        optionD: "Edit",
        correctAnswer: "Insert"
    },

    {
        // 199
        question: "To show of hide the ruler, we should go to ______ menu",
        optionA: "Tools",
        optionB: "Insert",
        optionC: "View",
        optionD: "Edit",
        correctAnswer: "View"
    },

    {
        // 200
        question: "Which technique selects a sentence in writer",
        optionA: "Single click",
        optionB: "Double click",
        optionC: "Triple click",
        optionD: "None of the above",
        correctAnswer: "Triple click"
    },

    {
        // 201
        question: "Spellings are corrected automatically in writer because of the ____________",
        optionA: "Auto Text",
        optionB: "Auto Correct",
        optionC: "Auto Complete",
        optionD: "All of the above",
        correctAnswer: "Auto Correct"
    },

    {
        // 202
        question: "Core2Duo is a type of :",
        optionA: "Primary Cache",
        optionB: "Magnetic storage",
        optionC: "Processor",
        optionD: "Hard disk",
        correctAnswer: "Processor"
    },

    {
        // 203
        question: "MS Office is a ",
        optionA: "System software",
        optionB: "Utility software package",
        optionC: "Operating system",
        optionD: "Device driver",
        correctAnswer: "Utility software package"
    },

    {
        // 204
        question: "Open Office and AbiWorld are",
        optionA: "System software",
        optionB: "Operating system",
        optionC: "Open Source Software (OSS)",
        optionD: "Device driver",
        correctAnswer: "Open Source Software (OSS)"
    },

    {
        // 205
        question: "Pendrive is related with : ", 
        optionA: "Primary cache",
        optionB: "Hard disk",
        optionC: "Magnetic storage",
        optionD: "Processor",
        correctAnswer: "Hard disk"
    },

    {
        // 206
        question: "BHIM Mobile App",
        optionA: "Money transfer",
        optionB: "Foeign exchange",
        optionC: "System software",
        optionD: "Operating system",
        correctAnswer: "Money transfer"
    },

    {
        // 207
        question: "Compiler is an example of :",
        optionA: "System software",
        optionB: "Operating system",
        optionC: "Utility software",
        optionD: "Application software",
        correctAnswer: "System software"
    },

    {
        // 208
        question: "L1 is :",
        optionA: "Secondary cache",
        optionB: "Primary Cache",
        optionC: "Magnetic storage",
        optionD: "Hard disk",
        correctAnswer: "Primary Cache"
    },

    {
        // 209
        question: "Key to permanently delete the file without sending it to the recycle bin",
        optionA: "Shift + del",
        optionB: "Ctrl + del",
        optionC: "Alt + del",
        optionD: "del",
        correctAnswer: "Shift + del"
    },

    {
        // 210
        question: "Layout style ",
        optionA: "Portrait",
        optionB: "Vertical",
        optionC: "Portrait and Landscape",
        optionD: "Portrait and Vertical",
        correctAnswer: "Portrait and Landscape"
    },

    {
        // 211
        question: "To create a hanging indent in a word document.",
        optionA: "Ctrl + T",
        optionB: "Ctrl + H",
        optionC: "Ctrl + I",
        optionD: "Ctrl + G",
        correctAnswer: "Ctrl + T"
    },

    {
        // 212
        question: "The most common input devices are :",
        optionA: "Keyboard and Printer",
        optionB: "Keyboard and Monitor",
        optionC: "Mouse and Keyboard",
        optionD: "Monitor and Mouse",
        correctAnswer: "Mouse and Keyboard"
    },

    {
        // 213
        question: "Hard disk drives are considered __________ storage.",
        optionA: "Tape",
        optionB: "Non-volatile",
        optionC: "Peripheral Device",
        optionD: "Primary",
        correctAnswer: "Non-volatile"
    },

    {
        // 214
        question: "The term ___________ designates equipment that might be added to a computer system to enhance its functionality.",
        optionA: "Software",
        optionB: "Peripheral devices",
        optionC: "Hard disk",
        optionD: "Memory",
        correctAnswer: "Peripheral devices"
    },

    {
        // 215
        question: "Which is a painting and drawing device.",
        optionA: "Mouse",
        optionB: "Keyboard",
        optionC: "Webcam",
        optionD: "Joystick",
        correctAnswer: "Mouse"
    },

    {
        // 216
        question: "A _________ can make easier to play games",
        optionA: "Mouse ",
        optionB: "Keyboard",
        optionC: "Webcam",
        optionD: "Joystick",
        correctAnswer: "Joystick"
    },


    {
        // 217
        question: "In windows operating system, the clock is visible on the",
        optionA: "Task bar",
        optionB: "Title bar",
        optionC: "Status bar",
        optionD: "Side bar",
        correctAnswer: "Task bar"
    },

    {
        // 218
        question: "In order to copy formatting features from source point to destination __________ is used",
        optionA: "Copy",
        optionB: "Paste",
        optionC: "Format painter",
        optionD: "Cut",
        correctAnswer: "Format painter"
    },

    {
        // 219
        question: "All the deleted files or folders goes to the ________.",
        optionA: "Documents",
        optionB: "Recycle Bin",
        optionC: "Memory",
        optionD: "Delete folder",
        correctAnswer: "Recycle Bin"
    },

    {
        // 220
        question: "To make a window wider, you would move the pointer until it changes to the Horizontal Resize shape and then __________",
        optionA: "Click",
        optionB: "Drag",
        optionC: "Double click",
        optionD: "Press Ctrl",
        correctAnswer: "Drag"
    },

    {
        // 221
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },
]