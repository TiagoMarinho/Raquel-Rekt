import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";

export default {
	name: "upscale",
	description: "Increase image resolution using artificial intelligence",
	description_localizations: {
		"pt-BR": "Aumentar resolução de imagem usando inteligência artificial"
	},
	type: ApplicationCommandType.ChatInput,
	options: [
		{
			type: ApplicationCommandOptionType.Attachment,
			name: "image",
			description: "Image to upscale",
			name_localizations: {
				"pt-BR": "imagem"
			},
			description_localizations: {
				"pt-BR": "Imagem a ser aumentada"
			},
			required: true
		},
		{
			type: ApplicationCommandOptionType.Number,
			name: "resize",
			description: "How many times to increase image resolution by",
			description_localizations: {
				"pt-BR": "Multiplicador de tamanho"
			},
			required: false,
			min_value: 1,
			max_value: 4
		},
		{
			type: ApplicationCommandOptionType.String,
			name: "model",
			description: "Upscaling model to resize the image with",
			name_localizations: {
				"pt-BR": "modelo"
			},
			description_localizations: {
				"pt-BR": "Qual modelo deve ser usado para aumentar o tamanho da imagem"
			},
			choices: [
				{ name: "Nearest", value: "Nearest" },
				{ name: "Lanczos", value: "Lanczos" },
				{ name: "R-ESRGAN General 4xV3", value: "R-ESRGAN General 4xV3" },
				{ name: "R-ESRGAN General WDN 4xV3", value: "R-ESRGAN General WDN 4xV3" },
				{ name: "R-ESRGAN AnimeVideo", value: "R-ESRGAN AnimeVideo" },
				{ name: "R-ESRGAN 4x+ Anime6B", value: "R-ESRGAN 4x+ Anime6B" },
				{ name: "R-ESRGAN 4x+", value: "R-ESRGAN 4x+" },
				{ name: "R-ESRGAN 2x+", value: "R-ESRGAN 2x+" }
			],
			required: false
		},
		{
			type: ApplicationCommandOptionType.String,
			name: "secondary-model",
			description: "Second upscaling model to resize the image with and mix with the first model's result",
			name_localizations: {
				"pt-BR": "modelo-secundário"
			},
			description_localizations: {
				"pt-BR": "Modelo secundário para aumentar a imagem e misturar com o resultado do modelo primário"
			},
			choices: [
				{ name: "Nearest", value: "Nearest" },
				{ name: "Lanczos", value: "Lanczos" },
				{ name: "R-ESRGAN General 4xV3", value: "R-ESRGAN General 4xV3" },
				{ name: "R-ESRGAN General WDN 4xV3", value: "R-ESRGAN General WDN 4xV3" },
				{ name: "R-ESRGAN AnimeVideo", value: "R-ESRGAN AnimeVideo" },
				{ name: "R-ESRGAN 4x+ Anime6B", value: "R-ESRGAN 4x+ Anime6B" },
				{ name: "R-ESRGAN 4x+", value: "R-ESRGAN 4x+" },
				{ name: "R-ESRGAN 2x+", value: "R-ESRGAN 2x+" }
			],
			required: false
		},
		{
			type: ApplicationCommandOptionType.Number,
			name: "mix",
			description: "Mix factor between primary and secondary upscaling models",
			description_localizations: {
				"pt-BR": "Fator de mistura entre modelo primário e secundário"
			},
			required: false,
			min_value: 0,
			max_value: 1
		},
		{
			type: ApplicationCommandOptionType.Boolean,
			name: "private",
			description: "Send response in a message only you can see",
			name_localizations: {
				"pt-BR": "privado"
			},
			description_localizations: {
				"pt-BR": "Responder com uma mensagem que só você poderá ver"
			},
			required: false
		}
	]
}