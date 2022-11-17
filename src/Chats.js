import React from 'react';
import "./Chats.css";
import Chat from  "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Sankar"
            message="How are you doing"
            timestamp="5 min ago"
            profilePic="https://lh3.googleusercontent.com/cA_mBhQDge3_JGPvJ5veoA3c5UIKTvYDnKmAu7EGzI1iN3v4DeAHm8g-iATA67j9k4DaGt2iAzqIx5gCTt63c3RSc7ZaE0_XFDyFO8L0EN3DnbRibHlvJRrQF0uP9HkeoHlDb6SAeZlXXZOIa9WHPIc2tBiFwHkwpoCzVEletSssodRWGr9MANqkuOV2ebrgpjljaCdCkGCa14MmDF1XJajZ8D3d2yabz11Bj4G97OxCV5MbJMXtzJExGw3xzrrpq9ABOVCLOKrNt1blaFE9I2s5GyqGi-a-9n7yaKUFL0llY7oaI29UycahVj2Qfh-5XGPZF5cmH6Yfg7bxGEwDNeG4_LYBqo_nC1UzYoTG2GTej6TE20X06r5dCdv2XZKoPtHjf-xkaKYtMBuyNJyi6-RRjo9T84a2Res4_DNQlC1_hIyjQSmmd38eAwJmzNG9k6q2sfC57fJwvMzq4Rl32WYiEpvKEVYGBhPKHsLe_dEneN3KjOjdVC5U3phnfW5zjYazS-Ggz6023OTXTwqAyGJSVPVXwimirXX_9NQEdEQSJ9tTDFu7PzjNreoDEImxu97r2yRZAzCds_Ypx8EBnThUBsNXyRoe9IWDkT9xg_v4tKs81MI-AXm7p6ipl7gf0qx0och5OcT5ils57WfusOWPpAEIvcXE0yF9N4mhsBZIzsntFDykRzBHgnjcI67nXZ3OX1C_LXDvD7FBYZcsdILV=s936-no?authuser=0"
          />  
           <Chat
            name="Jebin Yesudhas"
            message="call me when you are free"
            timestamp="15 min ago"
            profilePic="https://lh3.googleusercontent.com/sm4RALtqUjBTt6Y6CwJuL7qAXvYnt2422tjjOwE5PwXgg6YnFIjT34W08eG7aQI6jFF4Jk52aCyKkq1-yGU7W5kRptWhmZDiC9tUoKJoybuCfM2UbFVilQckzOz6EyRQoeH0b9a_vAyGrReZVyFOdeonYbROWELMETmw3vxfVxrIO5CIy3Jhme5MTV9-ZTXx_0rtLm6j9nkASWJW2ejd94e14Rb-ToQGBpd9IOeP5vWncHfV-rsIxyn8Erekt7HFgOorxbatjunEk3pDz6a4ol4nKV1QZYSIz63cVrO84yWaZe24NU595lk7xezUXdl_2cP8Z7iMfw1z5fRiXvZBnztESbsGDqL2gcV0HbM0GhEIckATrNg_s50WU9NsCFNs7rCOagoVH_vj3ODHTe12frbZdKvHIeVFSdM7Q9moAqiWMEAt2QMK3UqOYjEm1VYiKDqd532VtqQ61LejlRbeOxSQjPUlD0QN5IHtlYYvXUQND_trTWJocbcpDHcp7CiWh3yafofu1hAg9S6mDYvs4ibBaAh3CCjxQi0oyWQJMeYu90dwVBrFK2kWWA1-OA6ibiDQzTtXmGNh86Mv_UnDjCOBK63di9CZsHu7srgSBn-ds8FPsfIMG6a2J61uRDtJrqV707FT2FaRn6A4RH40hamw9PRrheaZoUxYKKRBg3q3pOPTnapFQ_aFQFEhR_tVScO8hNZR-xf_2bkBlYtzQKE=w582-h291-no?authuser=0"
          />  
           <Chat
            name="Sandy"
            message="will check with you tomorrow"
            timestamp="20 min ago"
            profilePic="https://lh3.googleusercontent.com/kysY_as_dL-lZulrjKEzHuU7AfkWX5uPqxgeBP-QaHpALFz6UkxInu678bBqcIxyglxfcmaeNlGbCaBeqiotaywzz2VRxyz3RbBxhTpVJLQTezlunobZNovZ0s0Ef-v-29qiIBBbsO3aQ726w0XPI5c9lE9WZFBKQbb5PNkyDXBRAbEcvltLWWZDx8fLvFAPggHVSVpRYbezm9nIORQ4M9Ta1W4q1aDagE7hJ3rT1TgWbeUXXn-FDcpvnL18cnU2WZqPGo8iZWJfxstI_L5t0PcyN54a32AuDabSl1X484wCRBXHJgzSZH-ZpwteUbZV-pXEUK8vZYjtd2npFgS4xOrcdBLoVyIaTXexQ_Gtr0MNkwmKnttkexrc-vS_y7woSTaHBv_wtdD9vgs3_sU0jcFpHX0_BaYM9lVvMqAsPrKZr8Ah9ilC-TxzCJmMPgiy5ryRertDVEzpA3bkzs8zziVoiV06FULGI2SYwT5qOrBZla48BU2YDGSvGcO-cZS2NboJhSkb5R0JLMQ91zZXUHvSrmFJ9kcwc2lgifwE6j-FnQfy_yvh0QIdHHUwMKNnLER527kXeokcAFDCuyXQuHS4DDspekAoejX4mE1NkEgX7ViKn8x92zsfBNx1ybshnFDkBLR5yAyrZrxLprr3TvNuI9Jzt4y0FB7oqQe9Rz5l3-QjyMOAsIeyWPsen0E6FoNkDcQWC9L3YXhnFGaJR2wN=w582-h388-no?authuser=0"
          />  
           <Chat
            name="Modi G"
            message="Okay, we can talk later"
            timestamp="45 min ago"
            profilePic="https://yt3.ggpht.com/ytc/AAUvwnh7CHDDIuu6a87VwcIoDe-UeDb-Cfu8Ig8utAcGBDw=s900-c-k-c0x00ffffff-no-rj"
          />  
        </div>
    )
}

export default Chats
