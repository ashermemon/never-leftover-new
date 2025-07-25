import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { styles } from "@/styles/auth.styles";
import { COLORS } from "@/constants/theme";
import { Image } from "expo-image";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      overScrollMode="never"
      alwaysBounceVertical={false}
      style={{
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <View style={{ alignItems: "center", width: "100%" }}>
        <Text
          style={[
            styles.textCentered,
            {
              fontFamily: "Nunito-Bold",
              fontSize: 20,
              marginTop: 5,
              marginBottom: 20,
            },
          ]}
        >
          Welcome to Meal Mash
        </Text>

        <Image
          source={require("@/assets/images/iconround.png")}
          style={{ width: 150, height: 150, marginVertical: 20 }}
        ></Image>
        <Text
          style={[styles.textCentered, { fontSize: 20, marginVertical: 20 }]}
        >
          Meal Mash is an app designed to help you save leftovers by
          transforming them into delicious meals. We want to make eating
          leftovers fun, interesting and most importantly, tasty!
        </Text>

        <View style={styles.generateButtonContainer}>
          <Pressable
            style={[
              styles.generateButton,
              {
                backgroundColor: COLORS.blueHeader,
                width: 200,
                marginTop: 20,
                borderColor: COLORS.blueHeaderBorder,
              },
            ]}
            onPress={() => router.push("/(tabs)/generationpage" as any)}
          >
            <Text
              style={[styles.textCentered, { fontFamily: "Nunito-SemiBold" }]}
              adjustsFontSizeToFit={true}
            >
              Save your leftovers!
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
