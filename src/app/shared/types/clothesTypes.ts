export type StarRating = 1 | 2 | 3 | 4 | 5;
export type ClothesTypes =
	| 'moletom'
	| 'conjunto'
	| 'manga longa'
	| 'camisa'
	| 'geral';
export const allClotheTypes: ClothesTypes[] = [
	'moletom',
	'conjunto',
	'manga longa',
	'camisa',
	'geral',
];
export type ClothesMaterial =
	| 'Algodão 100%'
	| 'Algodão 70%, poliéster 30%'
	| 'Poliéster 100%'
	| 'Lã 100%'
	| 'Seda 100%'
	| 'Algodão 60%, linho 40%'
	| 'Couro 100%'
	| 'Náilon 100%'
	| 'Algodão 80%, elastano 20%'
	| 'Algodão 50%, poliamida 30%, elastano 20%';
