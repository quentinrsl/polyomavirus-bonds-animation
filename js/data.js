C0  = 0.0478487627793223584957428264710
C1  = 0.0820874952323578596367661535721
C2  = 0.0919831947610306166536978645902
C3  = 0.104185866120626902522184256527
C4  = 0.159508419728932319992375824582
C5  = 0.1787372607291718755716205007246
C6  = 0.180669120116622322543727539983
C7  = 0.210241281833874424403594384522
C8  = 0.2707204554902024922253183653148
C9  = 0.34319353022244057407246218081548
C10 = 0.347313533259692355979268469051
C11 = 0.3602517244988994027025508153653
C12 = 0.393388829036478811293779158091
C13 = 0.425281025454798433709228334388
C14 = 0.439296728020722972632966333641
C15 = 0.457779235446372389179242869890
C16 = 0.502701949951372894064838005397
C17 = 0.542220764553627610820757130110
C18 = 0.5828995347449824144241690772051
C19 = 0.606611170963521188706220841909
C20 = 0.635522307288672858112822718909
C21 = 0.683371070067995216608565545380
C22 = 0.728499690936574881404561235204
C23 = 0.735967916735595431954156281793
C24 = 0.765540078452847533814023126332
C25 = 0.785348431692693064277841342634
C26 = 0.832685557057201783926745491732
C27 = 0.847627573685205393450789279904
C28 = 0.889534297813319966800025599161
C29 = 0.8954763364645277519465321063751
C30 = 0.943151259243881817126719892570
C31 = 0.9462091985694698563577506663151

const NODES = [[  C2,   C3,  1.0],[  C2,  -C3, -1.0],[ -C2,  -C3,  1.0],[ -C2,   C3, -1.0],[ 1.0,   C2,   C3],[ 1.0,  -C2,  -C3],[-1.0,  -C2,   C3],[-1.0,   C2,  -C3],[  C3,  1.0,   C2],[  C3, -1.0,  -C2],[ -C3, -1.0,   C2],[ -C3,  1.0,  -C2],[  C9,   C0,  C31],[  C9,  -C0, -C31],[ -C9,  -C0,  C31],[ -C9,   C0, -C31],[ C31,   C9,   C0],[ C31,  -C9,  -C0],[-C31,  -C9,   C0],[-C31,   C9,  -C0],[  C0,  C31,   C9],[  C0, -C31,  -C9],[ -C0, -C31,   C9],[ -C0,  C31,  -C9],[ 0.0,  C11,  C30],[ 0.0,  C11, -C30],[ 0.0, -C11,  C30],[ 0.0, -C11, -C30],[ C30,  0.0,  C11],[ C30,  0.0, -C11],[-C30,  0.0,  C11],[-C30,  0.0, -C11],[ C11,  C30,  0.0],[ C11, -C30,  0.0],[-C11,  C30,  0.0],[-C11, -C30,  0.0],[ C13,  -C6,  C29],[ C13,   C6, -C29],[-C13,   C6,  C29],[-C13,  -C6, -C29],[ C29, -C13,   C6],[ C29,  C13,  -C6],[-C29,  C13,   C6],[-C29, -C13,  -C6],[  C6, -C29,  C13],[  C6,  C29, -C13],[ -C6,  C29,  C13],[ -C6, -C29, -C13],[  C8, -C12,  C28],[  C8,  C12, -C28],[ -C8,  C12,  C28],[ -C8, -C12, -C28],[ C28,  -C8,  C12],[ C28,   C8, -C12],[-C28,   C8,  C12],[-C28,  -C8, -C12],[ C12, -C28,   C8],[ C12,  C28,  -C8],[-C12,  C28,   C8],[-C12, -C28,  -C8],[ C16,   C7,  C27],[ C16,  -C7, -C27],[-C16,  -C7,  C27],[-C16,   C7, -C27],[ C27,  C16,   C7],[ C27, -C16,  -C7],[-C27, -C16,   C7],[-C27,  C16,  -C7],[  C7,  C27,  C16],[  C7, -C27, -C16],[ -C7, -C27,  C16],[ -C7,  C27, -C16],[  C5,  C17,  C26],[  C5, -C17, -C26],[ -C5, -C17,  C26],[ -C5,  C17, -C26],[ C26,   C5,  C17],[ C26,  -C5, -C17],[-C26,  -C5,  C17],[-C26,   C5, -C17],[ C17,  C26,   C5],[ C17, -C26,  -C5],[-C17, -C26,   C5],[-C17,  C26,  -C5],[ C14,  C15,  C25],[ C14, -C15, -C25],[-C14, -C15,  C25],[-C14,  C15, -C25],[ C25,  C14,  C15],[ C25, -C14, -C15],[-C25, -C14,  C15],[-C25,  C14, -C15],[ C15,  C25,  C14],[ C15, -C25, -C14],[-C15, -C25,  C14],[-C15,  C25, -C14],[ C20,  -C4,  C24],[ C20,   C4, -C24],[-C20,   C4,  C24],[-C20,  -C4, -C24],[ C24, -C20,   C4],[ C24,  C20,  -C4],[-C24,  C20,   C4],[-C24, -C20,  -C4],[  C4, -C24,  C20],[  C4,  C24, -C20],[ -C4,  C24,  C20],[ -C4, -C24, -C20],[ C21,   C1,  C23],[ C21,  -C1, -C23],[-C21,  -C1,  C23],[-C21,   C1, -C23],[ C23,  C21,   C1],[ C23, -C21,  -C1],[-C23, -C21,   C1],[-C23,  C21,  -C1],[  C1,  C23,  C21],[  C1, -C23, -C21],[ -C1, -C23,  C21],[ -C1,  C23, -C21],[ C10, -C19,  C22],[ C10,  C19, -C22],[-C10,  C19,  C22],[-C10, -C19, -C22],[ C22, -C10,  C19],[ C22,  C10, -C19],[-C22,  C10,  C19],[-C22, -C10, -C19],[ C19, -C22,  C10],[ C19,  C22, -C10],[-C19,  C22,  C10],[-C19, -C22, -C10],[ C18,  C18,  C18],[ C18,  C18, -C18],[ C18, -C18,  C18],[ C18, -C18, -C18],[-C18,  C18,  C18],[-C18,  C18, -C18],[-C18, -C18,  C18],[-C18, -C18, -C18]]

const FACES = [
[  24,   0,  12,  60,  84,  72 ],
[  24,  72, 116, 106, 122,  50 ],
[  24,  50,  38,  14,   2,   0 ],
[  25,   3,  15,  63,  87,  75 ],
[  25,  75, 119, 105, 121,  49 ],
[  25,  49,  37,  13,   1,   3 ],
[  26,   2,  14,  62,  86,  74 ],
[  26,  74, 118, 104, 120,  48 ],
[  26,  48,  36,  12,   0,   2 ],
[  27,   1,  13,  61,  85,  73 ],
[  27,  73, 117, 107, 123,  51 ],
[  27,  51,  39,  15,   3,   1 ],
[  28,   4,  16,  64,  88,  76 ],
[  28,  76, 108,  96, 124,  52 ],
[  28,  52,  40,  17,   5,   4 ],
[  29,   5,  17,  65,  89,  77 ],
[  29,  77, 109,  97, 125,  53 ],
[  29,  53,  41,  16,   4,   5 ],
[  30,   6,  18,  66,  90,  78 ],
[  30,  78, 110,  98, 126,  54 ],
[  30,  54,  42,  19,   7,   6 ],
[  31,   7,  19,  67,  91,  79 ],
[  31,  79, 111,  99, 127,  55 ],
[  31,  55,  43,  18,   6,   7 ],
[  32,   8,  20,  68,  92,  80 ],
[  32,  80, 112, 101, 129,  57 ],
[  32,  57,  45,  23,  11,   8 ],
[  33,   9,  21,  69,  93,  81 ],
[  33,  81, 113, 100, 128,  56 ],
[  33,  56,  44,  22,  10,   9 ],
[  34,  11,  23,  71,  95,  83 ],
[  34,  83, 115, 102, 130,  58 ],
[  34,  58,  46,  20,   8,  11 ],
[  35,  10,  22,  70,  94,  82 ],
[  35,  82, 114, 103, 131,  59 ],
[  35,  59,  47,  21,   9,  10 ],
[ 132,  84,  60, 108,  76,  88 ],
[ 132,  88,  64, 112,  80,  92 ],
[ 132,  92,  68, 116,  72,  84 ],
[ 133, 121, 105,  45,  57, 129 ],
[ 133, 129, 101,  41,  53, 125 ],
[ 133, 125,  97,  37,  49, 121 ],
[ 134, 120, 104,  44,  56, 128 ],
[ 134, 128, 100,  40,  52, 124 ],
[ 134, 124,  96,  36,  48, 120 ],
[ 135,  85,  61, 109,  77,  89 ],
[ 135,  89,  65, 113,  81,  93 ],
[ 135,  93,  69, 117,  73,  85 ],
[ 136, 122, 106,  46,  58, 130 ],
[ 136, 130, 102,  42,  54, 126 ],
[ 136, 126,  98,  38,  50, 122 ],
[ 137,  87,  63, 111,  79,  91 ],
[ 137,  91,  67, 115,  83,  95 ],
[ 137,  95,  71, 119,  75,  87 ],
[ 138,  86,  62, 110,  78,  90 ],
[ 138,  90,  66, 114,  82,  94 ],
[ 138,  94,  70, 118,  74,  86 ],
[ 139, 123, 107,  47,  59, 131 ],
[ 139, 131, 103,  43,  55, 127 ],
[ 139, 127,  99,  39,  51, 123 ],
[  12,  36,  96, 108,  60 ],
[  13,  37,  97, 109,  61 ],
[  14,  38,  98, 110,  62 ],
[  15,  39,  99, 111,  63 ],
[  16,  41, 101, 112,  64 ],
[  17,  40, 100, 113,  65 ],
[  18,  43, 103, 114,  66 ],
[  19,  42, 102, 115,  67 ],
[  20,  46, 106, 116,  68 ],
[  21,  47, 107, 117,  69 ],
[  22,  44, 104, 118,  70 ],
[  23,  45, 105, 119,  71 ],
]

BONDS = [
    [0,1,2],
    [0,2,2],
    [0,8,1],
    [0,60,0],
    [0,36,1],
    [0,38,2],

    [1,2,2],
    [1,38,1],
    [1,68,0],
    [1,48,1],
    [1,50,2],

    [2,50,1],
    [2,8,2],
    [2,6,1],
    [2,62,0],

    [3,4,2],
    [3,5,2],
    [3,11,1],
    [3,63,0],
    [3,51,1],
    [3,53,2],

    [4,5,2],
    [4,53,1],
    [4,41,2],
    [4,39,1],
    [4,71,0],

    [5,11,2],
    [5,9,1],
    [5,61,0],
    [5,41,1],

    [6,56,2],
    [6,54,1],
    [6,62,0],
    [6,8,2],
    [6,7,2],

    [7,44,2],
    [7,42,1],
    [7,70,0],
    [7,56,1],
    [7,8,2],

    [8,44,1],
    [8,60,0],

    [9,10,2],
    [9,11,2],
    [9,61,0],
    [9,45,1],
    [9,47,2],

    [10,11,2],
    [10,59,2],
    [10,57,1],
    [10,69,0],
    [10,47,1],

    [11,59,1],
    [11,63,0],

    [12,36,2],
    [12,37,1],
    [12,64,0],
    [12,17,1],
    [12,14,2],
    [12,13,2],

    [13,43,2],
    [13,44,1],
    [13,60,0],
    [13,36,1],
    [13,14,2],

    [14,17,2],
    [14,15,1],
    [14,65,0],
    [14,43,1],

    [15,45,2],
    [15,46,1],
    [15,65,0],
    [15,17,2],
    [15,16,2],

	[16,17,2],
	[16,45,1],
	[16,61,0],
	[16,41,1],
	[16,40,2],

	[17,40,1],
	[17,64,0],

	[18,19,2],
	[18,20,2],
	[18,23,1],
	[18,66,0],
	[18,55,1],
	[18,54,2],

	[19,20,2],
	[19,54,1],
	[19,62,0],
	[19,50,1],
	[19,49,2],

	[20,49,1],
	[20,67,0],
	[20,21,1],
	[20,23,2],

	[21,22,2],
	[21,23,2],
	[21,67,0],
	[21,52,1],
	[21,51,2],

	[22,23,2],
	[22,51,1],
	[22,63,0],
	[22,59,1],
	[22,58,2],

	[23,58,1],
	[23,66,0],

	[24,25,2],
	[24,26,2],
	[24,32,1],
	[24,68,0],
	[24,38,1],
	[24,37,2],

	[25,26,2],
	[25,37,1],
	[25,64,0],
	[25,40,1],
	[25,39,2],

	[26,39,1],
	[26,71,0],
	[26,30,1],
	[26,32,2],

	[27,28,2],
	[27,29,2],
	[27,35,1],
	[27,69,0],
	[27,47,1],
	[27,46,2],

	[28,29,2],
	[28,46,1],
	[28,65,0],
	[28,43,1],
	[28,42,2],

	[29,42,1],
	[29,70,0],
	[29,33,1],
	[29,35,2],

	[30,31,2],
	[30,32,2],
	[30,71,0],
	[30,53,1],
	[30,52,2],

	[31,32,2],
	[31,52,1],
	[31,67,0],
	[31,49,1],
	[31,48,2],

	[32,48,1],
	[32,68,0],

	[33,34,2],
	[33,35,2],
	[33,70,0],
	[33,56,1],
	[33,55,2],

	[34,35,2],
	[34,55,1],
	[34,66,0],
	[34,58,1],
	[34,57,2],

	[35,57,1],
	[35,69,0],

	[36,37,2],
	[36,38,2],
	[36,60,0],

	[37,38,2],
	[37,64,0],

	[38,68,0],

	[39,40,2],
	[39,41,2],
	[39,71,0],

	[40,41,2],
	[40,64,0],

	[41,61,0],

	[42,43,2],
	[42,44,2],
	[42,70,0],

	[43,44,2],
	[43,65,0],

	[44,60,0],

	[45,46,2],
	[45,47,2],
	[45,61,0],

	[46,47,2],
	[46,65,0],

	[47,69,0],

	[48,49,2],
	[48,50,2],
	[48,68,0],

	[49,50,2],
	[49,67,0],

	[50,62,0],

	[51,52,2],
	[51,53,2],
	[51,63,0],

	[52,53,2],
	[52,67,0],

	[53,71,0],

	[54,55,2],
	[54,56,2],
	[54,62,0],

	[55,56,2],
	[55,66,0],

	[56,70,0],

	[57,58,2],
	[57,59,2],
	[57,69,0],

	[58,59,2],
	[58,66,0],

	[59,63,0],



]